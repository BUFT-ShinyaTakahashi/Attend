package com.viewsphere.attendance.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@Controller
@RequestMapping("/AttendanceInfo")
public class AttendanceInfoController {
    @RequestMapping(method = RequestMethod.GET)
    public String index(Model model) {
        return "AttendanceInfoList";
    }

    @RequestMapping(params = "person", method = RequestMethod.POST)
    public String person(Model model) {
    	return "AttendanceInfoList";
    }

    @RequestMapping(params = "group", method = RequestMethod.POST)
    public String group(Model model) {
    	return "AttendanceInfoList";
    }

}