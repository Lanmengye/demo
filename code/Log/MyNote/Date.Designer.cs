namespace MyNote
{
    partial class Date
    {
        /// <summary>
        /// Required designer variable.
        /// </summary>
        private System.ComponentModel.IContainer components = null;

        /// <summary>
        /// Clean up any resources being used.
        /// </summary>
        /// <param name="disposing">true if managed resources should be disposed; otherwise, false.</param>
        protected override void Dispose(bool disposing)
        {
            if (disposing && (components != null))
            {
                components.Dispose();
            }
            base.Dispose(disposing);
        }

        #region Windows Form Designer generated code

        /// <summary>
        /// Required method for Designer support - do not modify
        /// the contents of this method with the code editor.
        /// </summary>
        private void InitializeComponent()
        {
            this.selectedDate = new System.Windows.Forms.MonthCalendar();
            this.datelab = new System.Windows.Forms.Label();
            this.confirm = new System.Windows.Forms.Button();
            this.SuspendLayout();
            // 
            // selectedDate
            // 
            this.selectedDate.Location = new System.Drawing.Point(79, 18);
            this.selectedDate.MaxSelectionCount = 1;
            this.selectedDate.Name = "selectedDate";
            this.selectedDate.TabIndex = 0;
            // 
            // datelab
            // 
            this.datelab.AutoSize = true;
            this.datelab.Location = new System.Drawing.Point(2, 27);
            this.datelab.Name = "datelab";
            this.datelab.Size = new System.Drawing.Size(77, 12);
            this.datelab.TabIndex = 1;
            this.datelab.Text = "请选择日期：";
            // 
            // confirm
            // 
            this.confirm.Location = new System.Drawing.Point(195, 210);
            this.confirm.Name = "confirm";
            this.confirm.Size = new System.Drawing.Size(86, 26);
            this.confirm.TabIndex = 2;
            this.confirm.Text = "确 定";
            this.confirm.UseVisualStyleBackColor = true;
            this.confirm.Click += new System.EventHandler(this.confirm_Click);
            // 
            // Date
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(6F, 12F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.ClientSize = new System.Drawing.Size(317, 243);
            this.Controls.Add(this.confirm);
            this.Controls.Add(this.datelab);
            this.Controls.Add(this.selectedDate);
            this.Name = "Date";
            this.Text = "Date";
            this.ResumeLayout(false);
            this.PerformLayout();

        }

        #endregion

        private System.Windows.Forms.MonthCalendar selectedDate;
        private System.Windows.Forms.Label datelab;
        private System.Windows.Forms.Button confirm;
    }
}