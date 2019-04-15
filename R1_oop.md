# 面向对象

1. 方法

```java
// Person.java
public class Person {
  private String name;
  private int age;

  //带参数构造方法
  public Person(String name, int age) {
    this.name = name;
    this.age = age;
  }
  //构造方法
  public Person() {
    this.name = "unname";
    this.age = 200;
  }
  //返回值是String类型的方法
  public String getName() {
    return this.name;
  }
  //返回值是空void，参数是name的方法
  public void setName(String name) {
    this.name = name.trim();
  }
  //返回值是int，参数是空的方法
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
    ming.setName("杰克马", "idiot");
    System.out.println(ming.getName());
  }

}


```

# 继承

```java
//  Person.java
public class Person {
  protected String name;

  public Person(String name) {
    this.name = name;
  }

  public void run() {
    System.out.println(name + " is running!");
  }
}

//Student.java
//  集成自Person
public class Student extends Person {
  public Student(String name) {
    super(name);
  }

  private int score;

  public int getScore() {
    return score;
  }

  public void setScore(int score) {
    this.score = score;
  }

  public void hello() {
    System.out.println("hello " + this.name);
  }
}

//Main.java
public class Main {
  public static void main(String[] args) {
    Person p = new Person("yang000");
    Student s = new Student("yang001");
    p.run();  //yang000 is running!
    s.run();  //yang001 is running!
    s.hello();  //hello yang001
  }
}

```
