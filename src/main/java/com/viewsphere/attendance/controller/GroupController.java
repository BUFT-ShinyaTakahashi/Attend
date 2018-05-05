package com.viewsphere.attendance.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@Controller
@RequestMapping(value = "/group")
public class GroupController {

	private static final Logger logger = LoggerFactory.getLogger(GroupController.class);

	/**
	* グループ一覧へ遷移
	* @author Shinya Takahashi
	* @param model
	* @return group
	* @throws Exception
	*/
	@RequestMapping(params = "groupList", method = RequestMethod.POST)
	public String Group(Model model) {
        return "groupList";
    }

	/**
	* グループ詳細へ遷移
	* @author Shinya Takahashi
	* @param model
	* @return groupList
	* @throws Exception
	*/
 	@RequestMapping(params = "groupDetail", method = RequestMethod.POST)
    public String GroupDetail(Model model) {
        return "groupDetail";
    }

}
