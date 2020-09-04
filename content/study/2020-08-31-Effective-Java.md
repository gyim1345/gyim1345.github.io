---
layout: study
title: "Effective Java 3/e"
date: "2020-07-23"
template: "study"
description: '이펙티브 자바'
---

# (아이템1) 생성자 대신 정적 팩터리 매서드를 고려하라.

## 장점 5가지

### 이름을 가질 수 있다.

BigInteger(int, int, Random)를 쓰기보단 팩토리 매서드인 BigInteger.probablePrime이 조금 더 prime 값을 반환하는 메서드인것이 보일것이다.

### 호출될 때마다 인스턴스를 새로 생성하지 않다고 된다.

새로 생성 함으로써 immutable class를 지키고

새로 생성한 인ㄴ스턴스를 캐싱하여 재활용하는 식으로 불필요한 객체 생성을 피할 수 있다.

반복되는 요청에 같은 객체를 반환하는 식으로 인스턴스의 라이프 사이클을 통제 할 수 있다. 이것을 인스터스 통제라고 한다.

인스턴스 통제로 인하여 싱글턴, 인스턴스불화 를 만들 수 있다.

### 반환 타입의 하위 타입 객체를 반환할 수 있는 능력이 있다.

타입을 고를 수 있다는것은 엄청난 유연성을 부여한다.

### 네번째, 입력 매개변수에 따라 매번 다른 클래스의 객체를 반환할 수 있다.

반환 타입의 하위 타입이기만 하면 어떤 클래스의 객체를 반환하든 상관없다.

### 정적 팩터리 메서드를 작성하는 시점에서는 반환할 객체의 클래스가  존재하지 않아도 된다.

이런 유연함으로 프레임워크 근간을 만든다.
프레임워크 3개의 핵심 컴포턴트
  - 서비스 인터페이스
    - 구현체의 동작 정의
  - 제공자 등록 API
    - 제공자 구현체를 등록할때 쓰는 것
  - 서비스 접근 API
    - 클라이언트가 서비스 인스턴스를 얻을때 사용하는 것


## 단점

### 상속을 할려면 public이나 protected 생성자가 필요하니 정적 팩터리 매서드만 제공하면 하위 클래스를 만들 수 없다.

상속 보다 컴포지션을 사용하도록 유도하고 불변타입으로 만들려면 이 제약을 지켜야 한다는 점에서 장점이 될 수도 있다.

### 정적 팩터리 매서드는 프로그래머가 찾기 어렵다.

# (아이템2) 생성자에 매개변수가 많다면 빌더를 고려하자.
```java
NutritionFacts cocaCola = new NutritionFacts(240, 8, 100, 0, 35, 27);
```

보단 
```java 
NutritionFacts cocaCola = new NutritionFacts.Builder(240,8).calories(100).sodium(35).carbohydrate(27).build();
```

나아 보일거다.

빌더 패턴은 명명된 선택적 매개변수를 흉내낸거다.
빌더 패턴은 계층적으로 설계된 클래스와 함께 쓰기에 좋다.

그래서 생성자나 정적 팩터리가 처리해야 할 매개변수가 많다면 빌더 패턴을 선택하는 게 더 낫다.

# (아이템3) private 생성자나 열거 타입으로 싱글턴임을 보증하라

## 싱글턴 

- 인스턴스를 오직 하나만 생성할 수 있는 클래스

- 단점: 테스트 하기 어렵다.

만드는 방식은 생성자는 private로 감춰두고 유일한 인스턴스에 접근 할 수 있는 수단으로 pubblic static 맴버를 하나 마련해둔다.

```java
public class Elvis {
  public static final Elvis Instance = new Elvis();
  private Elvis() {...}

  public void leaveTheBuilding() {...}
}
```
private 생성자는 public static final 필드인 Elvis.Instance를 초기화 할대 딱 한번만 호출된다.

이 방식은 singleton 인것을 명확하게 알 수 있다. 또한 간결하다.


```java
public class Elvis {
  private static final Elvis Instance = new Elvis();
  private Elvis() {...}
  public static Elvis getInsstance() {return INSTANCE;}
  
  public void leaveTheBuilding() {...}
}
```

위는 다른 방식으로 만든것인데, 정적 팰터리 메서드를 public static 맴버로 제공한다. Elvis.getInstance는 항상 같은 객체의 참조를 반환하므로 제2의 ELvis인스턴스란 결코 만들어지지지 않는다.

위 방식 장점
- api를 바꾸지 않고도 싱글턴이 아니게 변경할 수 있다.
- 정적 팩터리를 제네릭 싱글턴 팩터리로 만들수 있다.
- 정적 팩터리의 메서드 참조를 공급자로 사용할 수 있다.

# (아이템4) 인스턴스화를 막을려거든 private 생성자를 사용하라

기본 타입/배열 메서드/팩터리 메서드/final 클래스 메서드 등 넣는 클래스를 생성할 수 있다. 이러한 것들을 인스턴스화 할려고 만든게 아닌데 생성자를 명시 하지 않으면 컴파일러가 자동으로 기본 생성자를 만들어 준다. 이것을 막기 위해서 private 클래스로 만들어서 막을 수 있다.
**추상 클래스로 만드는 것으로 인스턴스화를 막을 수 없다.** 하위 클래스로 만들어 인스턴스화 하면 우회 할 수 있다. 그래서 **private 생성자를 추가 하면 클래스의 인스턴스화를 막을 수 있다.**

```java
  public class UtilityClass {
    // 기보 생성자가 만들어 지는것을 막는다.(인스턴스 방지용)
    private UtilityClass() {
      throw new AssertionError();// 클래스 안에서 실수로라도 생성자를 호출 방지용
    }
    ...
  }
```
이 방식은 상속을 불가능 하게 하는 효과도 있다.

# (아이템 5) 자원을 직접 명시하지 말고 의존 객체 주입을 사용하라

사용하는 자원에 따라 동작이 달라지는 클래스에는 정적 유틸리티 클래스나 싱글턴 방식이 적합하지 않다. 원하는 자원을 이용하여 그에 맞는 자원 인스턴스를 지원해야 할때가 있다. 그때 인스턴스를 생성할 때 생성자에 필요한 자원을 념겨주는ㄴ 식으로 만족 할 수 있다.

```java
public class SpellChecker {
  private final Lexicon dictionary;

  public SpellChecker(Lexicon dictionary) {
    this.dictionary = Objects.requireNonNull(dictionary);
  }
  ...
}
```
이 **의존 객체 주입 패턴**은 자원이 몇개든 의존 관계가 어떻든 상관없이 잘 작동한다.  
또한 불변을 보장하고 생성자, 정적 팩터리, 빌더에 모두 똑같이 응용할 수 있다.

이것을 살짝 변형 해서 생성자에 자원ㄴ 팩터리를 넘겨 주는 방식도 있다.  
팩터리란 호출할 때마다 특정 타입의 인스턴스를 반복해서 만들어주는 객체를 말한다.
즉 팩터리 메서드 패턴을 구현한다.

의존객체 주입이 유연성과 테스트 용이성을 개선해주긴 하지만 의존성이 수천개 되는 큰프로젝트에서 어지럽게 만든다. 그래서 스프링등 프래임워크를 사용해서 그 프래임워크가 자동으로 의존 객체 주입을 해주는 기능을 사용한다

