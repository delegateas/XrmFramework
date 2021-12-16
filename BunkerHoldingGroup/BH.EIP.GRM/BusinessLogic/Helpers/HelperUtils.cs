using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Security.Cryptography;
using System.ServiceModel;
using System.Text;

using Microsoft.Xrm.Sdk;

using DG.XrmFramework.BusinessDomain.ServiceContext;

namespace DG.XrmFramework.BusinessLogic.Helpers
{
    public static class HelperUtils
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

        public static string ErrorMessageWrapper(Exception ex)
        {
            var msg = String.Empty;

            try
            {
                throw ex;
            }
            catch (FaultException<OrganizationServiceFault> ex_)
            {
                msg += String.Format("The application terminated with an error.\n");
                msg += String.Format("Timestamp: {0}\n", ex_.Detail.Timestamp);
                msg += String.Format("Code: {0}\n", ex_.Detail.ErrorCode);
                msg += String.Format("Message: {0}\n", ex_.Detail.Message);
                msg += String.Format("Inner Fault: {0}\n",
                    null == ex_.Detail.InnerFault ?
                    "No Inner Fault\n" : "Has Inner Fault\n");
            }
            catch (System.TimeoutException ex_)
            {
                msg += String.Format("The application terminated with an error.\n");
                msg += String.Format("Message: {0}\n", ex_.Message);
                msg += String.Format("Stack Trace: {0}\n", ex_.StackTrace);
                msg += String.Format("Inner Fault: {0}\n",
                    null == ex_.InnerException.Message ?
                    "No Inner Fault\n" : ex_.InnerException.Message + "\n");
            }
            catch (System.Exception ex_)
            {
                msg += String.Format("The application terminated with an error.\n");
                msg += String.Format(ex.Message);

                // Display the details of the inner ex_ception.
                if (ex.InnerException != null)
                {
                    msg += String.Format(ex.InnerException.Message + "\n");

                    var fe = ex_.InnerException as FaultException<OrganizationServiceFault>;
                    if (fe != null)
                    {
                        msg += String.Format("Timestamp: {0}\n", fe.Detail.Timestamp);
                        msg += String.Format("Code: {0}\n", fe.Detail.ErrorCode);
                        msg += String.Format("Message: {0}\n", fe.Detail.Message);
                        msg += String.Format("Trace: {0}\n", fe.Detail.TraceText);
                        msg += String.Format("Inner Fault: {0}\n",
                            null == fe.Detail.InnerFault ?
                            "No Inner Fault\n" : "Has Inner Fault\n");
                    }
                }
            }

            return msg;
        }

        public static string Salt()
        {
            var random = new byte[16];
            using (var rng = new System.Security.Cryptography.RNGCryptoServiceProvider())
            {
                rng.GetNonZeroBytes(random);
            }

            return Convert.ToBase64String(random);
        }

        public static string SHA256CheckSum(string value, string salt)
        {
            return BitConverter
                    .ToString(
                        SHA256Managed
                            .Create()
                            .ComputeHash(Encoding.ASCII.GetBytes(value + salt)))
                    .Replace("-", String.Empty);
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
