<%@ page language="java" contentType="text/html; charset=utf8" pageEncoding="utf8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>

<link rel="stylesheet" type="text/css" href="<c:url value="resources/style/person.css" />">



<form:form action="${pageContext.request.contextPath}/group">

<button type="submit" name="groupList">
	<img src="<c:url value="resources/images/bt_serch.png" />">
</button>

</form:form>


<hr>




