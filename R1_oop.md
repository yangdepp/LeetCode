# 面向对象

1. 方法

```java
// Person.java
public class Person {
  private String name;
  private int age;

  public Person(String name, int age) {
    this.name = name;
    this.age = age;
  }

  public Person() {
    this.name = "unname";
    this.age = 200;
  }

  public String getName() {
    return this.name;
  }

  public void setName(String name) {
    this.name = name.trim();
  }

  public int getAge() {
    return this.age;
  }
}

//  Main.java
public class Main {
  public static void main(String[] args) {
    Person ming = new Person("小明", 20);
    System.out.println(ming.getName());  // 小明

    ming.setName("xiaoming");
    System.out.println(ming.getName());  // xiaoming
    System.out.println(ming.getAge());  // 20

    //  调用默认的构造方法
    Person unname = new Person();
    System.out.println(unname.getName());  // unname
    System.out.println(unname.getAge());  // 200
  }
}

```

2. 方法的重载

```java
//  Person.java
public class Person {
  private String name;
  public String getName() {
    return this.name;
  }
  public void setName(String name) {
    this.name = name;
  }
  //  方法的重载，可以传入不同的参数返回不同的值
  public void setName(String firstName, String lastName) {
    this.name = firstName + lastName;
  }
}

// Main.java

public class Main {
  public static void main(String[] args) {
    Person ming = new Person();
    ming.setName("小明");
    System.out.println(ming.getName());
    ming.setName("杰克马", "傻逼");
    System.out.println(ming.getName());
  }

}


```


#  继承
