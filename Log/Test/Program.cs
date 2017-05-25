using LogLib;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Test
{
    public class Program
    {
        static void Main(string[] args)
        {
            TestWriteToFile();
            System.Threading.Thread.Sleep(1000);
            TestReadLog();
            Console.ReadKey();
        }
        static void TestWriteToFile()
        {
            LogModel log = new LogModel() { CreateTime = DateTime.Now, Author = "lmy" };
            Console.WriteLine("请输入日志标题：");
            log.Title = Console.ReadLine();
            Console.WriteLine("请输入日志摘要：");
            log.Summary = Console.ReadLine();
            Console.WriteLine("请输入日志内容：");
            log.Content = Console.ReadLine();
            string path = @"D:\study\log\";
            LogManager manager = new LogManager();
            manager.WriteToFile(log, path);
            Console.WriteLine("Write To File Success");
        }
        static void TestReadLog()
        {
            string fullpath = @"D:\study\log\" + DateTime.Now.ToString("yyyy-MM-dd") + ".txt";
            LogModel log = new LogManager().ReadLog(fullpath);
            Console.WriteLine(log.Title);
            Console.WriteLine(log.Summary);
            Console.WriteLine(log.Content);
            Console.WriteLine("Read Log To Console Success");
        }

    }
}
