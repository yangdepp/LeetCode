# 用 java 和 javascript 刷 leetcode 算法题

## 一阶段：复习 java 基础语法

1. hello world

```java
// class后面是类名，英文字母开头，可以包含英文字母、数字、下划线
// public表示是公开的类，不写也可以编译
public class Hello {
  // void表示返回值是空，main是方法名，括号中是参数，代表参数是字符串类型
  // static表示方法是一个静态方法
  public static void main(String[] args) {
    System.out.println("Hello, world!");
  }
}
```

2. 变量和数据类型

```java
// 1.变量类型 变量名 = 值;

// 2.java的基本数据类型
/*
整数类型：long int short byte
long l = 9000000000000000000L; 结尾加L
浮点类型：double float
布尔类型：boolean
字符类型：char
*/

// 3.常量，加final关键字
final double PI = 3.14;

```

3. 整数计算

```java
public class Div {
  public static void main(String[] args) {
    int i = 99 / 9;
    System.out.println(i); // 11
    int n = 100 / 9;
    System.out.println(n);  // 还是整数11
    int z = 100 / 0; // 运行时报错
    // 强制转型
    long l = 999;
    int i2 = (int)(l + 1);
    System.out.println(i2);
  }
}
```

4. 浮点数运算

```java

public class FloatOps {
  public static void main(String[] args) {
    double a = 0.1;
    double b = 1 - 9.0 / 10;
    double c = 9.0 / 10;
    double f = 1.23;
    double f1 = 0.23;
    int i2 = (int) f;
    System.out.println(a);  //0.1
    System.out.println(b);  //0.09999999999999998
    System.out.println(c);  //0.9
    System.out.println(i2); //1
    System.out.println(f + f1); //1.46
    // 注意没有自动提升的情况:
    double d1 = 1.2 + 24.0 / 5;
    double d2 = 1.2 + 24 / 5;
    System.out.println(d1); // 6.0
    System.out.println(d2); // 5.2
  }
}
```
