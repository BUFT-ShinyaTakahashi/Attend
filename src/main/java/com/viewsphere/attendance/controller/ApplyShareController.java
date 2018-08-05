package com.viewsphere.attendance.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@Controller
@RequestMapping("/ApplyShare")
public class ApplyShareController {
    @RequestMapping(method = RequestMethod.GET)
    public String index(Model model) {
        return "ApplyShareInfo";
    }

    @RequestMapping(params = "person", method = RequestMethod.POST)
    public String person(Model model) {
    	return "ApplyShareInfo";
    }

    @RequestMapping(params = "group", method = RequestMethod.POST)
    public String group(Model model) {
    	return "ApplyShareInfo";
    }

}