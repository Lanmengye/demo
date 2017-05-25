using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LogLib
{
    public class LogManager
    {
        /// <summary>
        /// 将日志写入文件中
        /// </summary>
        /// <param name="log">日志</param>
        /// <param name="path">文件路径</param>
        public void WriteToFile(LogModel log,string path)
        {
            string filename =path+log.CreateTime.ToString("yyyy-MM-dd") + ".txt";
            using (StreamWriter write = new StreamWriter(filename))
             {
                write.WriteLine(log.Title);
                write.WriteLine(log.Summary);
                write.WriteLine(log.Content);
                write.Close();
             }
        }
        /// <summary>
        /// 读取日志
        /// </summary>
        /// <param name="fullpath">文件路径</param>
        /// <returns>日志</returns>
        public LogModel ReadLog(string fullpath)
        {
            LogModel log = new LogModel();
            using (StreamReader reader=new StreamReader (fullpath))
            {
                log.Title = reader.ReadLine();
                log.Summary = reader.ReadLine();
                log.Content = reader.ReadToEnd();
                reader.Close();
            }
            return log;
        }
    }
}
