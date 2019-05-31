# CSS - препроцесори. SASS.



## CSS - препроцесори. SASS


### Що таке препроцесор
Препроцесор — програма, яка виконує попередню обробку даних, для того, щоб вони могли використовуватись іншою програмою.


### Що таке CSS - препроцесори?
- CSS препроцесор (від англ. CSS preprocessor) - це надбудова над CSS, яка додає раніше недоступні можливості для CSS, за допомогою нових синтаксичних конструкцій.
- Основне завдання препроцесора - це надання зручних синтаксичних конструкцій для розробника, щоб спростити, і тим самим, прискорити розробку та підтримку стилів в проектах.
- CSS препроцесори перетворять код, написаний з використанням препроцесорної мови, в чистий і валідний CSS-код.


### Навіщо потрібні CSS - препроцесори?
За допомогою препроцесорів ви можете писати код, який націлений на: 

- Читабельність для людини
- Структурованість і логічність
- Продуктивність


### Недоліки CSS
- Стандартний CSS - складно
- Синтаксис без ієрархій
- Відсутність зміних і функцій
- Неквапливий розвиток CSS


### Які бувають CSS - препроцесори?
- Less
- Sass(SCSS)
- Stylus


### SASS
Найпотужніший з CSS-препроцесорів. Має досить велику спільноту розробників. Заснований в 2007 році. 
Має два синтаксиса:
- Sass (Syntactically Awesome Style Sheets) - спрощений синтаксис CSS, який заснований на ідентаціі. Вважається застарілим.
- SCSS (Sassy CSS) - заснований на стандартному для CSS синтаксисі.



## SASS. Синтаксис.


### SASS. Синтаксис.
Оскільки, SASS - це CSS + синтаксичний сахар, тому бідь - який валідний CSS - код є валідним SASS - кодом.


### SASS. Змінні
Змінні в SASS починаються із $.
Типи зміних в SASS: 

- Колір
- Число
- Строка
- Boolean
- Списки
- Maps
- null


### SASS. Змінні Колір

```scss
$primary-color: #ffffff;

#main{
	color: $primary-color;
}

.wrap{
	color: $primary-color;
}
```


### SASS. Функції для роботи з кольором
```css				
$color: yellowgreen;           // #9ACD32
color: lighten($color, 15%);    // #b8dc70
color: darken($color, 15%);     // #6c9023
color: saturate($color, 15%);   // #a1e01f
color: desaturate($color, 15%); // #93ba45
color: (green + red);           // #ff8000	
```


### SASS. Змінні. Число

```scss					
$size: 18;             // A number
$size: $size * 1px;    // pixel
$size: $size + px;     // pixel
$size: $px-unit / 1px; // error
```


### SASS. Змінні. Строка
```scss
$content: 'open-qoute';
$new-content: 'content is #{$content}';

#main::after{
	content: $new-content;
}
```


### SASS. Змінні. Boolean
```scss
$isOk: false;

#main{
	font-color: $isOk;
}
```


### SASS. Змінні. Списки
```scss
$string-list: 'one', 'two';
$string-list2: 'one' 1px;

//nth(list, index)
#main{
	font-size: nth($string-list2, 2);
}
```


### SASS. Змінні. Map
```scss
$colors:(
'primary' : black,
'secondary': red
);

#main{
color: map-get($colors, 'secondary');
}
```



## SASS. Умовні конструкції. Цикли


### SASS. Умовні конструкції
```scss
$isOk: true;

#main{
	@if $isOk {
		color: blue;
	}
	@else{
		color: red;
	}
}
```


### SASS. Цикли. For
```scss
@for $i from 1 to 3{
	.item-#{$i} {width: 2px * $i;}
}	
```


### SASS. Цикли. While
```scss
$i: 6;

@while $i > 0 {
	.item-#{$i} { width: 2px * $i; }
	$i: $i - 2;
}
```


### SASS. Цикли. each
```scss
$list: adam, john, wynn, mason, kuroir;

.author-images{
  @each $author in $list{
    .photo-#{$author}{
      background: image-url("avatars/#{$author}.png") no-repeat;
    }
  }
    
}
```



## SASS. Ієрархія


### SASS. Ієрархія
```scss
parent-selector{
	child-selector{

	}
}
```


### SASS. Ієрархія
```scss
#main {
  size: 1px;
}

#main #color{
  size: 3px;
}

#main1{
  size: 1px;
  
  #color1{
    size:3px;
  }
  
}
```


### SASS. Ієрархія. Псевдоелементи і селектори
```scss
parent-selector{
	child-selector{
		&:pseudo
	}
}
```


### SASS. Ієрархія. Псевдоелементи і селектори
```scss
#main {
  size: 1px;
}

#main #color{
  size: 3px;
}

#main #color::after{
	size: 5px;
}

#main1{
  size: 1px;
  
  #color1{
    size:3px;

	&::after{
		size:5px;
	}
  }
  
}
```



## SASS. Наслідування


### SASS. Наслідування
```scss
#main{
	width: 50%;
	height: 200px;
}

.side{
	@extend #main;
	color: red;
}
```



## SASS. Mixin


### SASS. Mixin
Mixin - це блок коду, який дозволяє нам групувати декларації CSS, які ми можемо повторно використовувати на нашому сайті. 


### SASS. Mixin
```scss
@mixin display-left{
	float: left;
	width: 50%;
}

#main{
	@include display-left;
}
```


### SASS. Mixin
```css
@mixin border-radius($value){
	-webkit-border-radius: $value;
	-moz-border-radius: $value;
	border-radius: $value;
	}
	
#main{
	@include border-radius(2px);
}	
```

