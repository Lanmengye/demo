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
    public partial class Date : Form
    {
        public Main main;
        public Date()
        {
            InitializeComponent();
        }

        private void confirm_Click(object sender, EventArgs e)
        {
            string filename = @"D:\study\log\"+ this.selectedDate.SelectionStart.ToString("yyyy-MM-dd") + ".txt";           
            LogManager manager = new LogManager();
            LogModel log = manager.ReadLog(filename);
            this.main.title.Text = log.Title.Replace("\r\n", "");
            this.main.summary.Text = log.Summary.Replace("\r\n", "");
            this.main.content.Text = log.Content.Replace("\r\n","\n");
            this.Close();
        }
    }
}
