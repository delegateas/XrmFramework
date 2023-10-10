using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;

using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Messages;
using Microsoft.Xrm.Sdk.Metadata;
using Microsoft.Xrm.Sdk.Query;

using DG.XrmFramework.BusinessDomain.ServiceContext;
using HU = DG.XrmFramework.BusinessLogic.Helpers.HelperUtils;

namespace DG.XrmFramework.BusinessLogic.Helpers
{
  public static class HelperBusinessDomain
  {
    #region Inner classes

    #endregion

    #region Private properties

    #endregion

    #region Public properties

    #endregion

    #region Constructors

    #endregion

    #region Static methods
    /// <summary>
    /// Get text (label) for Global OptionSet
    /// </summary>
    /// <param name="service"></param>
    /// <param name="attributeName">OptionSet attribute name</param>
    /// <param name="optionSetValue">OptionSet Enum Value</param>
    /// <returns></returns>
    public static string GetOptionsetTextGlobal(IOrganizationService service, string attributeName, int optionSetValue)
    {
      string optionValueLabel = string.Empty;

      var req = new RetrieveOptionSetRequest { Name = attributeName };
      var res = (RetrieveOptionSetResponse)service.Execute(req);
      var resMetadata = (OptionSetMetadata)res.OptionSetMetadata;

      var optionList = resMetadata.Options.ToArray();
      var val = optionList.FirstOrDefault(x => x.Value.HasValue && x.Value.Value == optionSetValue);

      if (val != null)
        optionValueLabel = val.Label.UserLocalizedLabel.Label;

      return optionValueLabel;
    }

    /// <summary>
    /// Get text (label) for Normal/Local OptionSet
    /// </summary>
    /// <param name="service"></param>
    /// <param name="entityName"></param>
    /// <param name="attributeName">OptionSet attribute name</param>
    /// <param name="optionSetValue">OptionSet Enum Value</param>
    /// <returns></returns>
    public static string GetOptionsetTextLocal(
      IOrganizationService service,
      string entityName,
      string attributeName,
      int optionSetValue)
    {

      var retrieveDetails = new RetrieveEntityRequest
      {
        EntityFilters = EntityFilters.All,
        LogicalName = entityName
      };
      var res = (RetrieveEntityResponse)service.Execute(retrieveDetails);
      var metadata = res.EntityMetadata;
      var picklistMetadata = metadata.Attributes.FirstOrDefault(o =>
        String.Equals(o.LogicalName, attributeName, StringComparison.OrdinalIgnoreCase)) as PicklistAttributeMetadata;

      var options = picklistMetadata.OptionSet;
      var OptionsList = (from o in options.Options
                         where o.Value.Value == optionSetValue
                         select o).ToList();
      return (OptionsList.First()).Label.UserLocalizedLabel.Label;
    }

    /// <summary>
    /// 
    /// </summary>
    /// <typeparam name="T"></typeparam>
    /// <param name="expr"></param>
    /// <returns></returns>
    public static string StringOf<T>(Expression<Func<T, object>> expr)
    {
      try
      {
        return StaticReflection.GetMemberName<T>(expr).ToLower();
      }
      catch (Exception ex)
      {
        throw new Exception(HU.ErrorMessageWrapper(ex));
      };
    }

    /// <summary>
    /// 
    /// </summary>
    /// <typeparam name="T"></typeparam>
    /// <param name="service"></param>
    /// <param name="id"></param>
    /// <returns></returns>
    public static T GetEntity<T>(IOrganizationService service, Guid id)
        where T : Entity
    {
      try
      {
        var logicalName = (Activator.CreateInstance<T>()).LogicalName;

        return ((Entity)service.Retrieve(logicalName, id, new ColumnSet(true))).ToEntity<T>();
      }
      catch (Exception ex)
      {
        throw new Exception(HU.ErrorMessageWrapper(ex));
      };
    }

    /// <summary>
    /// 
    /// </summary>
    /// <typeparam name="T"></typeparam>
    /// <param name="service"></param>
    /// <param name="id"></param>
    /// <param name="attributeName"></param>
    /// <returns></returns>
    public static IEnumerable<T> GetEntitiesByLookup<T>
        (IOrganizationService service, Guid id, string attributeName)
        where T : Entity
    {
      try
      {
        var filter = new FilterExpression
        {
          FilterOperator = LogicalOperator.And,
          Conditions =
                    {
                        new ConditionExpression
                        {
                            AttributeName = attributeName,
                            Operator = ConditionOperator.Equal,
                            Values = { id }
                        }
                    }
        };

        return GetEntitiesHelper<T>(service, filter);
      }
      catch (Exception ex)
      {
        throw new Exception(HU.ErrorMessageWrapper(ex));
      };
    }

    /// <summary>
    /// 
    /// </summary>
    /// <typeparam name="T"></typeparam>
    /// <param name="service"></param>
    /// <param name="dictionary"></param>
    /// <returns></returns>
    public static IEnumerable<T> GetEntitiesByDictionary<T>
        (IOrganizationService service, Dictionary<string, object> dictionary)
        where T : Entity
    {
      try
      {
        var filter = new FilterExpression
        {
          FilterOperator = LogicalOperator.And
        };

        foreach (KeyValuePair<string, object> c in dictionary)
        {
          filter.AddCondition(c.Key, ConditionOperator.Equal, c.Value);
        }

        return GetEntitiesHelper<T>(service, filter);
      }
      catch (Exception ex)
      {
        throw new Exception(HU.ErrorMessageWrapper(ex));
      };
    }

    /// <summary>
    /// 
    /// </summary>
    /// <typeparam name="T"></typeparam>
    /// <param name="service"></param>
    /// <param name="id"></param>
    /// <param name="attributeName"></param>
    /// <returns></returns>
    public static IEnumerable<T> GetEntitiesLightByLookup<T>
        (IOrganizationService service, Guid id, string attributeName)
        where T : Entity
    {
      try
      {
        var filter = new FilterExpression
        {
          FilterOperator = LogicalOperator.And,
          Conditions =
                    {
                        new ConditionExpression
                        {
                            AttributeName = attributeName,
                            Operator = ConditionOperator.Equal,
                            Values = { id }
                        }
                    }
        };

        return GetEntitiesLightHelper<T>(service, filter);
      }
      catch (Exception ex)
      {
        throw new Exception(HU.ErrorMessageWrapper(ex));
      };
    }

    /// <summary>
    /// 
    /// </summary>
    /// <typeparam name="T"></typeparam>
    /// <param name="service"></param>
    /// <param name="dictionary"></param>
    /// <returns></returns>
    public static IEnumerable<T> GetEntitiesLightByDictionary<T>
        (IOrganizationService service, Dictionary<string, object> dictionary)
        where T : Entity
    {
      try
      {
        var filter = new FilterExpression
        {
          FilterOperator = LogicalOperator.And
        };

        foreach (KeyValuePair<string, object> c in dictionary)
        {
          filter.AddCondition(c.Key, ConditionOperator.Equal, c.Value);
        }

        return GetEntitiesLightHelper<T>(service, filter);
      }
      catch (Exception ex)
      {
        throw new Exception(HU.ErrorMessageWrapper(ex));
      };
    }

    public static int GetEntitiesCountByLookup<T>
        (IOrganizationService service, Guid id, string attributeName)
        where T : Entity
    {
      try
      {
        return GetEntitiesLightByLookup<T>(service, id, attributeName).Count();
      }
      catch (Exception ex)
      {
        throw new Exception(HU.ErrorMessageWrapper(ex));
      };
    }

    public static int GetEntitiesCountByDictionary<T>
        (IOrganizationService service, Dictionary<string, object> dictionary)
        where T : Entity
    {
      try
      {
        return GetEntitiesLightByDictionary<T>(service, dictionary).Count();
      }
      catch (Exception ex)
      {
        throw new Exception(HU.ErrorMessageWrapper(ex));
      };
    }

    /// <summary>
    /// 
    /// </summary>
    /// <typeparam name="T"></typeparam>
    /// <typeparam name="U"></typeparam>
    /// <param name="service"></param>
    /// <param name="id"></param>
    /// <param name="attributeName"></param>
    /// <returns></returns>
    public static IEnumerable<T> GetEntitiesIntersectTable<T, U>
        (IOrganizationService service, Guid id, string attributeName)
        where T : Entity
        where U : Entity
    {
      try
      {
        var filter = new FilterExpression
        {
          FilterOperator = LogicalOperator.And,
          Conditions =
                {
                    new ConditionExpression
                    {
                        AttributeName = attributeName,
                        Operator = ConditionOperator.Equal,
                        Values = { id }
                    }
                }
        };

        return GetEntitiesIntersectTableHelper<T, U>(service, filter);
      }
      catch (Exception ex)
      {
        throw new Exception(HU.ErrorMessageWrapper(ex));
      };
    }

    /// <summary>
    /// 
    /// </summary>
    /// <typeparam name="T"></typeparam>
    /// <typeparam name="U"></typeparam>
    /// <typeparam name="V"></typeparam>
    /// <param name="service"></param>
    /// <param name="id"></param>
    /// <returns></returns>
    public static IEnumerable<T> GetEntitiesIntersectTable<T, U, V>
        (IOrganizationService service, Guid id)
        where T : Entity
        where U : Entity
        where V : Entity
    {
      try
      {
        var metadataV = EntityMetadata<V>(service);
        var primaryAttributeV = metadataV.PrimaryIdAttribute;

        return GetEntitiesIntersectTable<T, U>(service, id, primaryAttributeV);
      }
      catch (Exception ex)
      {
        throw new Exception(HU.ErrorMessageWrapper(ex));
      };
    }

    public static bool EnsureUniqueness<T>
        (IOrganizationService service, Dictionary<string, object> filter, bool update)
        where T : Entity
    {
      var value = 0 + Convert.ToInt32(update);

      return value < GetEntitiesCountByDictionary<T>(service, filter);
    }

    /// <summary>
    /// 
    /// </summary>
    /// <param name="service"></param>
    /// <param name="target"></param>
    /// <param name="relatedEntity"></param>
    /// <param name="relation"></param>
    public static void AssociateEntities
        (IOrganizationService service, Entity target, Entity relatedEntity, string relation)
    {
      try
      {
        var request = new AssociateRequest
        {
          Target = new EntityReference(target.LogicalName, target.Id),
          RelatedEntities =
                new EntityReferenceCollection
                {
                            new EntityReference(relatedEntity.LogicalName, relatedEntity.Id)
                },
          Relationship = new Relationship(relation)
        };

        service.Execute(request);
      }
      catch (Exception ex)
      {
        throw new Exception(HU.ErrorMessageWrapper(ex));
      };
    }

    /// <summary>
    /// 
    /// </summary>
    /// <param name="service"></param>
    /// <param name="target"></param>
    /// <param name="relatedEntity"></param>
    /// <param name="relation"></param>
    public static void DisassociateEntities
        (IOrganizationService service, Entity target, Entity relatedEntity, string relation)
    {
      try
      {
        var request = new DisassociateRequest
        {
          Target = new EntityReference(target.LogicalName, target.Id),
          RelatedEntities =
                new EntityReferenceCollection
                {
                            new EntityReference(relatedEntity.LogicalName, relatedEntity.Id)
                },
          Relationship = new Relationship(relation)
        };

        service.Execute(request);
      }
      catch (Exception ex)
      {
        throw new Exception(HU.ErrorMessageWrapper(ex));
      };
    }

    #endregion

    #region Public methods

    #endregion

    #region Factory methods

    #endregion

    #region Interface members

    #endregion

    #region Protected methods

    #endregion

    #region Private methods

    private static EntityMetadata MetadataHelper<T>
        (IOrganizationService service, EntityFilters filter)
        where T : Entity
    {
      try
      {
        var logicalName = (Activator.CreateInstance<T>()).LogicalName;

        var req = new OrganizationRequest();
        var params_ = new ParameterCollection();

        params_.Add(@"LogicalName", logicalName);
        params_.Add(@"EntityFilters", filter);
        params_.Add(@"MetadataId", Guid.Empty);
        params_.Add(@"RetrieveAsIfPublished", true);

        req.RequestName = @"RetrieveEntity";
        req.Parameters.AddRange(params_);

        var resp = service.Execute(req);

        var metadata = resp.Results.FirstOrDefault();

        if (null == metadata.Value)
        {
          return null;
        }

        return (EntityMetadata)metadata.Value;
      }
      catch (Exception ex)
      {
        throw new Exception(HU.ErrorMessageWrapper(ex));
      };
    }

    private static EntityMetadata EntityMetadata<T>
        (IOrganizationService service)
        where T : Entity
    {
      try
      {
        return MetadataHelper<T>(service, EntityFilters.Entity);
      }
      catch (Exception ex)
      {
        throw new Exception(HU.ErrorMessageWrapper(ex));
      };
    }

    private static IEnumerable<T> GetEntitiesHelper<T>
        (IOrganizationService service, QueryExpression query)
        where T : Entity
    {
      var req = new RetrieveMultipleRequest { Query = query };
      var resp = (RetrieveMultipleResponse)service.Execute(req);

      foreach (var e in resp.EntityCollection.Entities)
      {
        yield return e.ToEntity<T>();
      }

      while (resp.EntityCollection.MoreRecords)
      {
        query.PageInfo.PageNumber++;
        resp = (RetrieveMultipleResponse)service.Execute(req);

        foreach (var e in resp.EntityCollection.Entities)
        {
          yield return e.ToEntity<T>();
        }
      }
    }

    private static IEnumerable<T> GetEntitiesHelper<T>
        (IOrganizationService service, FilterExpression filter)
        where T : Entity
    {
      try
      {
        var logicalName = (Activator.CreateInstance<T>()).LogicalName;

        var query = new QueryExpression(logicalName)
        {
          ColumnSet = new ColumnSet(true),
          PageInfo = new PagingInfo() { PageNumber = 1 },
          Criteria = filter
        };

        return GetEntitiesHelper<T>(service, query);
      }
      catch (Exception ex)
      {
        throw new Exception(HU.ErrorMessageWrapper(ex));
      };
    }

    private static IEnumerable<T> GetEntitiesLightHelper<T>
        (IOrganizationService service, FilterExpression filter)
        where T : Entity
    {
      try
      {
        var logicalName = (Activator.CreateInstance<T>()).LogicalName;

        var query = new QueryExpression(logicalName)
        {
          ColumnSet = new ColumnSet(logicalName + "id"),
          PageInfo = new PagingInfo() { PageNumber = 1 },
          Criteria = filter
        };

        return GetEntitiesHelper<T>(service, query);
      }
      catch (Exception ex)
      {
        throw new Exception(HU.ErrorMessageWrapper(ex));
      };
    }

    private static IEnumerable<T> GetEntitiesIntersectTableHelper<T, U>
        (IOrganizationService service, FilterExpression filter)
        where T : Entity
        where U : Entity
    {
      try
      {
        var logicalNameT = (Activator.CreateInstance<T>()).LogicalName;
        var logicalNameU = (Activator.CreateInstance<U>()).LogicalName;

        var metadataT = EntityMetadata<T>(service);
        var primaryAttributeT = metadataT.PrimaryIdAttribute;

        QueryExpression query = new QueryExpression()
        {
          EntityName = logicalNameT,
          ColumnSet = new ColumnSet(true),
          PageInfo = new PagingInfo() { PageNumber = 1 },
          LinkEntities =
                {
                    new LinkEntity
                    {
                        LinkFromEntityName = logicalNameT,
                        LinkFromAttributeName = primaryAttributeT,
                        LinkToEntityName = logicalNameU,
                        LinkToAttributeName = primaryAttributeT,
                        LinkCriteria = filter
                    }
                }
        };

        return GetEntitiesHelper<T>(service, query);
      }
      catch (Exception ex)
      {
        throw new Exception(HU.ErrorMessageWrapper(ex));
      };
    }

    #endregion

    #region Private classes

    /// <summary>
    /// http://joelabrahamsson.com/getting-property-and-method-names-using-static-reflection-in-c/
    /// </summary>
    private static class StaticReflection
    {
      // DG: Commented in order to ensure "privacy" of the class
      //
      //public static string GetMemberName<T>(
      //    this T instance,
      //    Expression<Func<T, object>> expression)
      //{
      //    return GetMemberName(expression);
      //}

      public static string GetMemberName<T>(
          Expression<Func<T, object>> expression)
      {
        if (expression == null)
        {
          throw new ArgumentException(
              "The expression cannot be null.");
        }

        return GetMemberName(expression.Body);
      }

      // DG: Commented in order to ensure "privacy" of the class
      //
      //public static string GetMemberName<T>(
      //    this T instance,
      //    Expression<Action<T>> expression)
      //{
      //    return GetMemberName(expression);
      //}

      public static string GetMemberName<T>(
          Expression<Action<T>> expression)
      {
        if (expression == null)
        {
          throw new ArgumentException(
              "The expression cannot be null.");
        }

        return GetMemberName(expression.Body);
      }

      private static string GetMemberName(
          Expression expression)
      {
        if (expression == null)
        {
          throw new ArgumentException(
              "The expression cannot be null.");
        }

        if (expression is MemberExpression)
        {
          // Reference type property or field
          var memberExpression =
              (MemberExpression)expression;
          return memberExpression.Member.Name;
        }

        if (expression is MethodCallExpression)
        {
          // Reference type method
          var methodCallExpression =
              (MethodCallExpression)expression;
          return methodCallExpression.Method.Name;
        }

        if (expression is UnaryExpression)
        {
          // Property, field of method returning value type
          var unaryExpression = (UnaryExpression)expression;
          return GetMemberName(unaryExpression);
        }

        throw new ArgumentException("Invalid expression");
      }

      private static string GetMemberName(
          UnaryExpression unaryExpression)
      {
        if (unaryExpression.Operand is MethodCallExpression)
        {
          var methodExpression =
              (MethodCallExpression)unaryExpression.Operand;
          return methodExpression.Method.Name;
        }

        return ((MemberExpression)unaryExpression.Operand)
            .Member.Name;
      }
    }

    #endregion
  }

  #region Other classes

  #endregion
}
