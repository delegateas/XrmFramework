using DG.XrmOrg.XrmSolution.ConsoleJobs.Containers;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;

namespace DG.XrmOrg.XrmSolution.ConsoleJobs.Helpers
{
    internal static class ListExtension
    {
        /// <summary>
        /// Prints a list of containers to a CSV file. Creates file if it doesn't exist. Overwrites file if it exists by default (appendToFileIfExists = false).
        /// </summary>
        /// <param name="containers">The containers to write to file</param>
        /// <param name="filePath">The path to the file</param>
        /// <param name="appendToFileIfExists">Optional. Whether or not to append to file if it already exists. Default: False</param>
        public static void PrintToCsv<T>(this List<CsvContainer<T>> containers, string filePath, bool appendToFileIfExists = false) where T : struct
        {
            if (!containers.Any())
            {
                throw new InvalidDataException("Print set is empty");
            }
            if (string.IsNullOrWhiteSpace(filePath))
            {
                throw new InvalidDataException("File path is empty");
            }
            var header = CsvContainer<T>.GetCsvHeader();

            StreamWriter perfWriter = new StreamWriter(filePath, appendToFileIfExists, Encoding.UTF8);
            try
            {
                if (!string.IsNullOrWhiteSpace(header) && !appendToFileIfExists)
                {
                    perfWriter.WriteLine(header);
                }
                foreach (var item in containers)
                {
                    perfWriter.WriteLine(item.ToCsvString());
                }
            }
            finally
            {
                perfWriter.Close();
            }
        }
    }
}
