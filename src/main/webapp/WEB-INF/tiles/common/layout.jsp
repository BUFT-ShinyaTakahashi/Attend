<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<%@ taglib uri="http://tiles.apache.org/tags-tiles" prefix="tiles"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
<%@ page contentType="text/html;charset=UTF-8"%>
<%@ page session="false" %>
<html>
<head>
	<title>Home2</title>
	<link rel="stylesheet" type="text/css" href="<c:url value="resources/style/style.css" />">
	<link rel="stylesheet" type="text/css" href="<c:url value="resources/style/home.css" />">
	<script src="<c:url value="resources/js/jquery-3.2.1.min.js" />"></script>
</head>
<body>
<header id="header">
        <tiles:insertAttribute name="header" />
</header>

<main id="main">
        <tiles:insertAttribute name="body" />
</main>

<footer id="footer">
        <tiles:insertAttribute name="footer" />
</footer>

</body>
</html>


