var a = 1, b = 1, c, d;
c = ++a; alert(c);           // 2 : Инкремунет(увеличивает значение переменной на 1)
d = b++; alert(d);           // 1 : Инкремунет(увеличивает значение переменной на 1)
c = (2+ ++a); alert(c);      // 5 : 2 + Инкремент переменной a(2 + )
d = (2+ b++); alert(d);      // 4 : 2 + Инкремент переменной b
alert(a);                    // 3 : Увеличение значение во 2-ой строчке и в 4-ой
alert(b);                    // 3 : Увеличение значение во 3-ей строчке и в 5-ой
