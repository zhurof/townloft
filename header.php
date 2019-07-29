<!doctype html>
<html lang="ru">
<head>
	<meta charset="UTF-8">
	<title>Верстка</title>
	<meta name="viewport" content="width=device-width, shrink-to-fit=no" />	
	<link rel="stylesheet" href="css/fonts.css" />	
	<link rel="stylesheet" href="css/font-awesome.css" />
	<link rel="stylesheet" href="libs/slick/slick.css" />
	<link rel="stylesheet" href="css/style.css" />
</head>
<body>
	<header class="header">
		<div class="wrapper header__wrapper">
			<img src="img/logo.svg" alt="" class="header__logo" />
			<ul class="header__menu">				
				<li><a href="#">Каталог</a></li>
				<li><a href="#">преимущества</a></li>
				<li><a href="#">о нас</a></li>
				<li><a href="#">портфолио</a></li>
				<li><a href="#">калькулятор</a></li>
				<li><a href="#">контакты</a></li>
			</ul>
			<div class="chat-block">
				<div class="chat-block__trigger"></div>
				<div class="chat-block__body">
					<h3 class="chat-block__subtitle">Выберите удобный способ связи</h3>
					<div class="chat-block__links">
						<a href="#" class="circle-link">
							<i class="circle-link__icon fa-paper-plane"></i>
							<span class="circle-link__caption">Telegram</span>
						</a>						
						<a href="#" class="circle-link">
							<i class="circle-link__icon fa-whatsapp"></i>
							<span class="circle-link__caption">Whatsapp</span>
						</a>
						<a href="#" class="circle-link">
							<i class="circle-link__icon icon-viber"></i>
							<span class="circle-link__caption">Viber</span>
						</a>
					</div>
					<h3 class="chat-block__subtitle">Или закажите обратный звонок</h3>
					<form action="asd.as">
						<label class="field">
							<span class="field__placeholder">Телефон</span>
							<input type="tel" name="phone" />
						</label>
						<button class="btn btn_block">Заказать звонок</button>
					</form>
				</div>
			</div>
			<div class="phone-block header__phone">
				<div class="phone-block__head">+375 (29) 922-99-77</div>
				<div class="phone-block__body">
					<div class="phone-block__item">
						<h3 class="phone-block__subtitle">Магазин 1</h3>
						<a href="tel:+375299229977" class="phone-block__phone">+375 (29) 922-99-77</a>
						<div class="phone-block__address">МФК Ленинград, ул. Ленина 27 Время работы: 8 - 20</div>
					</div>
					<div class="phone-block__item">
						<h3 class="phone-block__subtitle">Магазин 2</h3>
						<a href="tel:+375336350128" class="phone-block__phone">+375 (33) 635-01-28</a>
						<div class="phone-block__address">ТЦ Трюм, ул. Кальварийская 7б Время работы: 8 - 20</div>
					</div>
				</div>
			</div>
		</div>
	</header>
<!-- Переход на страницу со ссылками на современные браузеры для ie9 и ниже -->
<!--[if lt IE 10]><script>location.href='/old-ie.html';</script><![endif]-->