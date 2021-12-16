using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

using Microsoft.Xrm.Sdk;

using DG.XrmFramework.BusinessDomain.ServiceContext;

namespace DG.XrmFramework.BusinessLogic.Helpers
{
    public static class HelperPlugin
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
        /// 
        /// </summary>
        /// <typeparam name="T"></typeparam>
        /// <param name="context"></param>
        /// <param name="trace"></param>
        /// <returns></returns>
        public static T GetEntity<T>
            (IPluginExecutionContext context, ITracingService trace)
            where T : Entity
        {
            var logicalName = (Activator.CreateInstance<T>()).LogicalName;

            if (!context.InputParameters.Contains("Target"))
            {
                trace.Trace("Context does not contain 'Target'");
                return null;
            }

            if (!(context.InputParameters["Target"] is Entity))
            {
                var typeName = context.InputParameters["Target"].GetType().Name;
                trace.Trace("'Target' is not an Entity. It's of type: {0}", typeName);
                return null;
            }

            var entity = (Entity)context.InputParameters["Target"];

            if (!(logicalName == entity.LogicalName))
            {
                trace.Trace("'Entity' is not of specified type: {0} vs. {1}",
                    entity.LogicalName, logicalName);
                return null;
            }

            return entity.ToEntity<T>();
        }

        public static Tuple<EntityReference, OptionSetValue, OptionSetValue>
            GetEntityMoniker<T>(IPluginExecutionContext context, ITracingService trace)
            where T : Entity
        {
            var logicalName = (Activator.CreateInstance<T>()).LogicalName;

            if (!context.InputParameters.Contains("EntityMoniker") ||
                !context.InputParameters.Contains("State") ||
                !context.InputParameters.Contains("Status"))
            {
                trace.Trace("Context does not contain 'EntityMoniker'");
                return null;
            }

            if (!(context.InputParameters["EntityMoniker"] is EntityReference))
            {
                var typeName = context.InputParameters["EntityMoniker"].GetType().Name;
                trace.Trace("'EntityMoniker' is not an EntityReference. It's of type: {0}", typeName);
                return null;
            }

            var entityRef = (EntityReference)context.InputParameters["EntityMoniker"];
            var state = (OptionSetValue)context.InputParameters["State"];
            var status = (OptionSetValue)context.InputParameters["Status"];

            if (!(logicalName == entityRef.LogicalName))
            {
                trace.Trace("'EntityReference' is not of specified type: {0} vs. {1}",
                    entityRef.LogicalName, logicalName);
                return null;
            }

            return new Tuple<EntityReference, OptionSetValue, OptionSetValue>
                (entityRef, state, status);
        }

        public static T GetPreImageEntity<T>
            (IPluginExecutionContext context, ITracingService trace)
            where T : Entity
        {
            var logicalName = (Activator.CreateInstance<T>()).LogicalName;

            if (null == context.PreEntityImages || 
                !context.PreEntityImages.Contains("PreImage"))
            {
                trace.Trace("Context does not contain 'PreImageEntity'");
                return null;
            }

            if (!(context.PreEntityImages["PreImage"] is Entity))
            {
                var typeName = context.PreEntityImages["PreImage"].GetType().Name;
                trace.Trace("'PreImage' is not an Entity. It's of type: {0}", typeName);
                return null;
            }

            var entity = (Entity)context.PreEntityImages["PreImage"];

            if (!(logicalName == entity.LogicalName))
            {
                trace.Trace("'Entity' is not of specified type: {0} vs. {1}",
                    entity.LogicalName, logicalName);
                return null;
            }

            return entity.ToEntity<T>();
        }

        public static T GetPostImageEntity<T>
            (IPluginExecutionContext context, ITracingService trace)
            where T : Entity
        {
            var logicalName = (Activator.CreateInstance<T>()).LogicalName;

            if (null == context.PostEntityImages ||
                !context.PostEntityImages.Contains("PostImage"))
            {
                trace.Trace("Context does not contain 'PostImageEntity'");
                return null;
            }

            if (!(context.PostEntityImages["PostImage"] is Entity))
            {
                var typeName = context.PostEntityImages["PostImage"].GetType().Name;
                trace.Trace("'PostImage' is not an Entity. It's of type: {0}", typeName);
                return null;
            }

            var entity = (Entity)context.PostEntityImages["PostImage"];

            if (!(logicalName == entity.LogicalName))
            {
                trace.Trace("'Entity' is not of specified type: {0} vs. {1}",
                    entity.LogicalName, logicalName);
                return null;
            }

            return entity.ToEntity<T>();
        }

        /// <summary>
        /// 
        /// </summary>
        /// <typeparam name="T"></typeparam>
        /// <param name="context"></param>
        /// <param name="trace"></param>
        /// <returns></returns>
        public static EntityReference GetEntityReference<T>
            (IPluginExecutionContext context, ITracingService trace)
            where T : Entity
        {
            var logicalName = (Activator.CreateInstance<T>()).LogicalName;

            if (!context.InputParameters.Contains("Target"))
            {
                trace.Trace("Context does not contain 'Target'");
                return null;
            }

            if (!(context.InputParameters["Target"] is EntityReference))
            {
                var typeName = context.InputParameters["Target"].GetType().Name;
                trace.Trace("'Target' is not an EntityReference. It's of type: {0}", typeName);
                return null;
            }

            var entityRef = (EntityReference)context.InputParameters["Target"];

            if (!(logicalName == entityRef.LogicalName))
            {
                trace.Trace("'EntityReference' is not of specified type: {0} vs. {1}",
                    entityRef.LogicalName, logicalName);
                return null;
            }

            return entityRef;
        }

        /// <summary>
        /// 
        /// </summary>
        /// <param name="context"></param>
        /// <param name="trace"></param>
        /// <returns></returns>
        public static EntityReferenceCollection GetEntityReferenceCollection
            (IPluginExecutionContext context, ITracingService trace)
        {
            if (context.InputParameters.Contains("RelatedEntities") &&
                context.InputParameters["RelatedEntities"] is EntityReferenceCollection)
            {
                return (EntityReferenceCollection)context.InputParameters["RelatedEntities"];
            }

            trace.Trace("Context does not contain 'RelatedEntities'");
            
            return new EntityReferenceCollection();
        }

        /// <summary>
        /// 
        /// </summary>
        /// <param name="context"></param>
        /// <param name="trace"></param>
        /// <param name="schemaName"></param>
        /// <returns></returns>
        public static Relationship GetRelationship
            (IPluginExecutionContext context, ITracingService trace, string schemaName)
        {
            if (context.InputParameters.Contains("Relationship") &&
                context.InputParameters["Relationship"] is Relationship)
            {
                Relationship relationShip = (Relationship)context.InputParameters["Relationship"];
                if (relationShip.SchemaName == schemaName)
                {
                    return relationShip;
                }
            }

            trace.Trace("Context does not contain 'Relationship'");
            return null;
        }

        /// <summary>
        /// Merges an entity and an image to a new object. 
        /// If a value exist in the entity that values is used. 
        /// If a value exist in the image but not the entity, the image value is used
        /// If no image is provided all fields from the entity is returned in a new entity
        /// </summary>
        /// <typeparam name="T"></typeparam>
        /// <param name="tracingService"></param>
        /// <param name="entity"></param>
        /// <param name="image"></param>
        /// <returns></returns>
        public static T MergeEntityAndImage<T>(ITracingService tracingService, T entity, T image) where T : Entity
        {
            tracingService.Trace($"Merging entity with image.");
            var entityFields = entity.Attributes.Select(f => f.Key).ToList();
            var imageFields = image == null ? new List<string>() : image.Attributes.Select(f => f.Key).ToList();
            var allFields = entityFields.Union(imageFields).ToList();

            T mergedEntity;
            if (typeof(Entity) == typeof(T))
            {
                tracingService.Trace($"Merging Entities.");
                mergedEntity = (T)Activator.CreateInstance(typeof(T), entity.LogicalName, entity.Id);
            }
            else
            {
                tracingService.Trace($"Merging {typeof(T).Name}.");
                mergedEntity = (T)Activator.CreateInstance(typeof(T), entity.Id);
            }

            foreach (var field in allFields)
            {
                if (entity.Contains(field))
                {
                    tracingService.Trace($"Field {field} has changed. Added to merged entity.");
                    mergedEntity.Attributes[field] = entity.Attributes[field];
                }
                else if (image != null && image.Contains(field))
                {
                    tracingService.Trace($"Field {field} only found in image. Keeping value.");
                    mergedEntity.Attributes[field] = image.Attributes[field];
                }
            }

            return mergedEntity;
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

        #endregion

        #region Private classes

        #endregion
    }

    #region Other classes

    #endregion
}
