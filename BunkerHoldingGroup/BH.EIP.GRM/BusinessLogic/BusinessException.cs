using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DG.XrmFramework.BusinessLogic
{
    public class BusinessException : Exception
    {
        public BusinessErrorCode ErrorCode { get; set; }

        public BusinessException(string message, BusinessErrorCode code)
            : base(message)
        {
            ErrorCode = code; 
        }

        /// <summary>
        /// All Errorcodes has a two digit group prefix and a three digit unique code (format. XXYYY)
        /// Sample:
        /// Create Account (Prefix 10)
        /// CreateAccount = 10001,
        /// </summary>
        public enum BusinessErrorCode
        {
            None = 0,
            CreateAccount = 10001,
            
        };
    }

}
