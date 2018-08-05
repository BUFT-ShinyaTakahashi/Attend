<%@ page language="java" contentType="text/html; charset=utf8" pageEncoding="utf8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ taglib prefix="f" uri="http://www.springframework.org/tags/form"%>

<img src="resources/images/title.png">
<div class = "btn-wrapper">

	<form:form action="attendance" method="post">
		<a class = "btn" href="javascript:void(0)" onclick="this.parentNode.submit();" style="text-decoration: none; float:left; margin:3px;">HOME</a>
	</form:form>
	<form:form action="attendance" method="post">
		<a class = "btn" href="javascript:void(0)" onclick="this.parentNode.submit();" style="text-decoration: none; float:left; margin:3px;">勤怠管理</a>
	</form:form>
	<form:form action="attendance" method="post">
		<a class = "btn" href="javascript:void(0)" onclick="this.parentNode.submit();" style="text-decoration: none; float:left; margin:3px;">各種申請</a>
	</form:form>
	<form:form action="attendance" method="post">
		<a class = "btn" href="javascript:void(0)" onclick="this.parentNode.submit();" style="text-decoration: none; float:left; margin:3px;">管理機能</a>
	</form:form>

</div>
