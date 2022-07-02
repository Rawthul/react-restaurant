﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EntityLayer.Concrete
{
    public class MainCourse
    {
        [Key]
        public int MainCourseID { get; set; }
        public string? MainCourseImage { get; set; }
        public string? MainCoursePrice { get; set; }
    }
}