# 用 java 和 javascript 刷 leetcode

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

5. 数组类型

```java

public class Main {
  public static void main(String[] args) {
    int[] ns1 = new int[5]; // { 0, 0, 0, 0, 0 }
    int[] ns2 = new int[] { 1, 3, 5, 7, 9 };
    int[] ns3 = { 2, 4, 6, 8, 10 };
    int[] ns4 = ns3;
    // 初始化时直接指定数组的元素
    int[] ns5 = new int[] { 1, 2, 3, 4, 5, 6, 7, 8 };
    // 或者直接简写
    int[] ns6 = { 9, 8, 7, 6, 5, 4, 3, 2, 1 };

    // 现在ns3和ns4指向同一个数组:
    System.out.println("ns3[1]: " + ns3[1]);  //4
    ns3[1] = 999;
    System.out.println("ns4[1]: " + ns4[1]);  //999
    // 把ns3指向一个新数组:
    ns3 = new int[] { 1, 2, 3 };
    ns3[1] = 888;
    System.out.println("ns4[1]: " + ns4[1]);  //999
    // String数组:
    String[] strs = { "Abc", "Xyz", "123" };
    strs[1] = "Hello";
		System.out.println(ns5.length);  //8
		System.out.println(ns6[0]);  //9
  }
}
```

6. 输入和输出

```java
import java.util.Scanner
public class Input{
  public class static void main(String[] args) {
    Scanner sanner = new Scanner(System.in);
    System.out.print("请输入您的名字:");
    String name = scanner.nextLine();
    System.out.print("请输入你的年龄:");
    int age = scanner.nextInt(System.in);
    System.out.println("您的名字是" + name + ",您的年龄是" + age);
  }
}

```

7. if...else switch

```java
//略...
```

8. for 循环

```java

public class Main {
  public static void main(String[] args) {
    int[] ns = { 1, 2, 3, 4, 5, 6, 7 };
    for (int i = 0; i < ns.length; i++) {
      if(ns[i] % 2 == 0){
        continue;
      }else if(ns[i] === 5){
        break;
      }
      System.out.println(ns[i]);  // 1,3
    }
    // for each循环
    for(int n : ns) {
      System.out.println(n);
    }
    // 可以用Arrays.toString()打印数组元素
    System.out.println(Arrays.toString(ns));
  }
}
```

9. 遍历数组

```java

public class Main {
  public static void main(String[] args) {
    int[] ns = { 1, 20, 3, 14, 5, 6, 9 };

    // 可以用Arrays.toString()打印数组元素
    System.out.println(Arrays.toString(ns));

    //  冒泡排序
/*  for(int i = 0; i < ns.length; i++){
      for(int j = i + 1; j < ns.length; j++){
        if(ns[i] > ns[j]){
          int temp = ns[j];
          ns[j] = ns[i];
          ns[i] = temp;
        }
      }
    }
    System.out.println(Arrays.toString(ns)); */

    //  也可以用Arrays.sort方法
    Arrays.sort(ns);
    System.out.println(Arrays.toString(ns));
  }
}
```
