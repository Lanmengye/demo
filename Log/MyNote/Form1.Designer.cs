namespace MyNote
{
    partial class Main
    {
        /// <summary>
        /// 必需的设计器变量。
        /// </summary>
        private System.ComponentModel.IContainer components = null;

        /// <summary>
        /// 清理所有正在使用的资源。
        /// </summary>
        /// <param name="disposing">如果应释放托管资源，为 true；否则为 false。</param>
        protected override void Dispose(bool disposing)
        {
            if (disposing && (components != null))
            {
                components.Dispose();
            }
            base.Dispose(disposing);
        }

        #region Windows 窗体设计器生成的代码

        /// <summary>
        /// 设计器支持所需的方法 - 不要修改
        /// 使用代码编辑器修改此方法的内容。
        /// </summary>
        private void InitializeComponent()
        {
            this.splitContainer1 = new System.Windows.Forms.SplitContainer();
            this.read = new System.Windows.Forms.Button();
            this.write = new System.Windows.Forms.Button();
            this.save = new System.Windows.Forms.Button();
            this.content = new System.Windows.Forms.RichTextBox();
            this.contentLab = new System.Windows.Forms.Label();
            this.summary = new System.Windows.Forms.TextBox();
            this.summaryLab = new System.Windows.Forms.Label();
            this.title = new System.Windows.Forms.TextBox();
            this.titleLab = new System.Windows.Forms.Label();
            ((System.ComponentModel.ISupportInitialize)(this.splitContainer1)).BeginInit();
            this.splitContainer1.Panel1.SuspendLayout();
            this.splitContainer1.Panel2.SuspendLayout();
            this.splitContainer1.SuspendLayout();
            this.SuspendLayout();
            // 
            // splitContainer1
            // 
            this.splitContainer1.Dock = System.Windows.Forms.DockStyle.Fill;
            this.splitContainer1.Location = new System.Drawing.Point(0, 0);
            this.splitContainer1.Name = "splitContainer1";
            // 
            // splitContainer1.Panel1
            // 
            this.splitContainer1.Panel1.Controls.Add(this.read);
            this.splitContainer1.Panel1.Controls.Add(this.write);
            // 
            // splitContainer1.Panel2
            // 
            this.splitContainer1.Panel2.Controls.Add(this.save);
            this.splitContainer1.Panel2.Controls.Add(this.content);
            this.splitContainer1.Panel2.Controls.Add(this.contentLab);
            this.splitContainer1.Panel2.Controls.Add(this.summary);
            this.splitContainer1.Panel2.Controls.Add(this.summaryLab);
            this.splitContainer1.Panel2.Controls.Add(this.title);
            this.splitContainer1.Panel2.Controls.Add(this.titleLab);
            this.splitContainer1.Size = new System.Drawing.Size(653, 495);
            this.splitContainer1.SplitterDistance = 147;
            this.splitContainer1.TabIndex = 0;
            // 
            // read
            // 
            this.read.Location = new System.Drawing.Point(27, 96);
            this.read.Name = "read";
            this.read.Size = new System.Drawing.Size(103, 47);
            this.read.TabIndex = 0;
            this.read.Text = "查看日志";
            this.read.UseVisualStyleBackColor = true;
            this.read.Click += new System.EventHandler(this.read_Click);
            // 
            // write
            // 
            this.write.Location = new System.Drawing.Point(27, 25);
            this.write.Name = "write";
            this.write.Size = new System.Drawing.Size(103, 47);
            this.write.TabIndex = 0;
            this.write.Text = "编写日志";
            this.write.UseVisualStyleBackColor = true;
            this.write.Click += new System.EventHandler(this.write_Click);
            // 
            // save
            // 
            this.save.Location = new System.Drawing.Point(388, 468);
            this.save.Name = "save";
            this.save.Size = new System.Drawing.Size(68, 24);
            this.save.TabIndex = 4;
            this.save.Text = "保存日志";
            this.save.UseVisualStyleBackColor = true;
            this.save.Click += new System.EventHandler(this.save_Click);
            // 
            // content
            // 
            this.content.Location = new System.Drawing.Point(68, 98);
            this.content.Name = "content";
            this.content.Size = new System.Drawing.Size(388, 366);
            this.content.TabIndex = 3;
            this.content.Text = "";
            // 
            // contentLab
            // 
            this.contentLab.AutoSize = true;
            this.contentLab.Location = new System.Drawing.Point(22, 98);
            this.contentLab.Name = "contentLab";
            this.contentLab.Size = new System.Drawing.Size(47, 12);
            this.contentLab.TabIndex = 2;
            this.contentLab.Text = "内 容：";
            // 
            // summary
            // 
            this.summary.Location = new System.Drawing.Point(67, 52);
            this.summary.Name = "summary";
            this.summary.Size = new System.Drawing.Size(389, 21);
            this.summary.TabIndex = 1;
            // 
            // summaryLab
            // 
            this.summaryLab.AutoSize = true;
            this.summaryLab.Location = new System.Drawing.Point(20, 55);
            this.summaryLab.Name = "summaryLab";
            this.summaryLab.Size = new System.Drawing.Size(47, 12);
            this.summaryLab.TabIndex = 0;
            this.summaryLab.Text = "摘 要：";
            // 
            // title
            // 
            this.title.Location = new System.Drawing.Point(67, 16);
            this.title.Name = "title";
            this.title.Size = new System.Drawing.Size(389, 21);
            this.title.TabIndex = 1;
            // 
            // titleLab
            // 
            this.titleLab.AutoSize = true;
            this.titleLab.Location = new System.Drawing.Point(20, 19);
            this.titleLab.Name = "titleLab";
            this.titleLab.Size = new System.Drawing.Size(47, 12);
            this.titleLab.TabIndex = 0;
            this.titleLab.Text = "标 题：";
            // 
            // Main
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(6F, 12F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.ClientSize = new System.Drawing.Size(653, 495);
            this.Controls.Add(this.splitContainer1);
            this.IsMdiContainer = true;
            this.Name = "Main";
            this.Text = "我的日志";
            this.splitContainer1.Panel1.ResumeLayout(false);
            this.splitContainer1.Panel2.ResumeLayout(false);
            this.splitContainer1.Panel2.PerformLayout();
            ((System.ComponentModel.ISupportInitialize)(this.splitContainer1)).EndInit();
            this.splitContainer1.ResumeLayout(false);
            this.ResumeLayout(false);

        }

        #endregion

        private System.Windows.Forms.SplitContainer splitContainer1;
        private System.Windows.Forms.Button read;
        private System.Windows.Forms.Button write;
        private System.Windows.Forms.Label summaryLab;
        private System.Windows.Forms.Label titleLab;
        private System.Windows.Forms.Label contentLab;
        private System.Windows.Forms.Button save;
        public System.Windows.Forms.TextBox summary;
        public System.Windows.Forms.TextBox title;
        public System.Windows.Forms.RichTextBox content;
    }
}

