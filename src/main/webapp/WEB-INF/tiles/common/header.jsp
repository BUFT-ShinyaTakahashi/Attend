<%@ page language="java" contentType="text/html; charset=utf8" pageEncoding="utf8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>

<img src="resources\images\2cc367_677802adea474660ba43c6ed0b678576_mv2.png">
<div class = "btn-wrapper">
	<a class = "btn" href="#" style="text-decoration: none;">HOME</a>
	<a class = "btn" href="#" style="text-decoration: none;">勤怠管理</a>
	<a class = "btn" href="#" style="text-decoration: none;">各種申請</a>
	<a class = "btn" href="#" style="text-decoration: none;">管理機能</a>

<form:form action="${pageContext.request.contextPath}/attendance">
<button type="submit" name="attendance">
	管理機能
</button>
</form:form>

</div>
