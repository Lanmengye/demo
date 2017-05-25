using LogLib;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace MyNote
{ 
    public partial class Main : Form
    {
        public Main()
        {
            InitializeComponent();
        }

        private void write_Click(object sender, EventArgs e)
        {
            this.title.Text = string.Empty;
            this.summary.Text = string.Empty;
            this.content.Text = string.Empty;
        }

        private void save_Click(object sender, EventArgs e)
        {
            string file = @"D:\study\log\";
            LogModel log = new LogModel();
            log.Title = this.title.Text.Trim();
            log.Summary = this.summary.Text.Trim();
            log.Content = this.content.Text.Replace("\n","\r\n");
            log.CreateTime = DateTime.Now;
            try
            {
                new LogManager().WriteToFile(log,file);
                MessageBox.Show("日志保存成功！");
            }
            catch (Exception)
            {
                MessageBox.Show("日志保存失败！");
            }
        }

        private void read_Click(object sender, EventArgs e)
        {
            Date dateForm = new Date();
            dateForm.main = this;
            dateForm.ShowDialog();
        }
    }
}
