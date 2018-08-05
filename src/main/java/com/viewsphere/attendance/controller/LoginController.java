package com.viewsphere.attendance.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.viewsphere.attendance.bussiness.LoginService;
import com.viewsphere.attendance.model.LoginModel;;

@Controller
public class LoginController {

	private static final Logger logger = LoggerFactory.getLogger(LoginController.class);

	@Autowired
	LoginService loginService;

	//初期表示
	@RequestMapping(value = "/", method = RequestMethod.GET)
    public String login(Model model) {

		LoginModel LoginModel = new LoginModel();
		model.addAttribute("LoginModel", LoginModel);

        return "Login";
    }

	//ログインボタン押下
	@RequestMapping(value = "/login", method = RequestMethod.POST)
	public String login(Model model, @ModelAttribute("LoginModel") LoginModel loginModel) {
		//入力情報取得
		model.addAttribute("userid", loginModel.getUserid());
		model.addAttribute("password", loginModel.getPassword());

		model.addAttribute("LoginModel", loginModel);

		//アカウントチェック
		if(loginService.chkUserPassWord(loginModel)) {
			return "Home";
		}else {
			model.addAttribute("message", "パスワードが違います");
			return "Login";
		}
		//


    }

}
