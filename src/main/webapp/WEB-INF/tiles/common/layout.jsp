<%@ page language="java" contentType="text/html; charset=utf8" pageEncoding="utf8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">

<html>
<head>
	<title>Home2</title>
	<script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>

	<link rel="stylesheet" type="text/css" href="<c:url value="resources/style/home.css" />">
	<link rel="stylesheet" type="text/css" href="<c:url value="resources/style/style.css" />">

	<link rel="stylesheet" type="text/css" href="resources/style/home.css">
	<link rel="stylesheet" type="text/css" href="resources/style/style.css">

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


