# Learning-React

## Todo project

### functional component 에서 파라미터로 전달되는 props 비구조화 할당하기.
-  (예)
```
	const TodoListTemplate = ({form, children}) => {
  	return (
    <main className="todo-list-template">
      <div className="title">
        오늘 할 일
      </div>
      <section className="form-wrapper">
        {form}
      </section>
      <section className="todos-wrapper">
        { children }
      </section>
    </main>
  );
};
```

- 위와같이 functional component 의 경우	const TodoListTemplate = (props) => {} 의 형태로 전달된다.
	그것을 비구조화 할당하여 ({form, children})의 형태로 전달했다.
	이 컴포넌트는 두가지 props를 전달받는데, 위와 같은 방법으로 비구조화 할당하여 나누어 전달하면 필요한 부분에 맞추어 props를 배치할 수 있어 편하다.
	여러 종류의 JSX를 컴포넌트의 props로 넣을때 좋다.

### styled-components 사용시 조건 설정하기.
- (예)

```
const SText = styled.div`
	flex: 1;
	word-break: break-all;
	/* &.done {
		text-decoration: line-through;
	} */
	
	styled-components 와 bind 로 css를 구성할 때 달리 해야할 부분이다.
		bind를 사용할 때는 위와같이 &.done 과 같이 사용할 수 있지만
		styled-components 를 쓸 때는 아래와 같이 효과를 설정하고,
		해당 태그의 prosp를 가져와서 그 값의 boolean 값을 확인하고 해당 값을 지정해야한다.
	
	text-decoration: ${(props) => (props.current ? 'line-through' : 'none')};
`;
```

- styled-components를 이용하게 되면 태그에서 바로 조건을 설정하는 것도 그 조건을 이용하는 방식도 기존의 css와 조금 다르다.
	조건을 걸 때는,	아래와 같이 설정하고 current 값을 가져와서 확인하고 해당 값을 지정하면 된다.
	current={done === true} 를 물어보면 current 값의 boolean 값을 구한다.

```
<Tick type="checkbox" checked={done} readOnly />
<SText current={done === true}>{children}</SText>
```

- styled-components 는 편하고 좋지만 기존의 css를 쓸때와 다른부분들이 있어서 그것들을 채워갈 방법들을 정리해 두어야 겠다.
- 굳이 styled-components 를 써야 하는것은 아니지만 확실히 프로젝트 전체의 가독성에 있어서 더 낫다.


## Redux
- 스토어
- 액션
- 디스패치
- 리듀서
- 구독
- mapStateToProps
- mapDispatchToProps
- mergeProps
- Immutable.js
 - 객체 불변성
  - 리액트 컴포넌트는 state 또는 상위 컴포넌트에서 전달받은 props 값이 변할 때 렌더링되는데,
	  배열이나 객체를 직접 수정한다면 내부 값을 수정했을때, 같은 레퍼런스를 가리키는 배열, 객체 역시 수정된다.
		- 그렇기때문에 전개연산자를 사용해서 기존 값을 가진 새 객체 또는 배열을 만들어서 사용하는 것.
		 객체에서 전개연산자, 배열에서 slice를 쓰는 것.
		- 이러한 작업을 간소화 하려 만든것이 Imuutable.js
 - Map
  - Immutable 의 Map 은 객체 대신 사용하는 데이터 구조.
	- Map({}) 과 같이 객체를 감싸는 구조로 사용한다.
	- 자바스크립트의 Map 과는 다르다.
  - 객체 내부에 또 다른 객체들이 있다면 내부 객체들도 Map 으로 감싸야 setIn, getIn 을 쓸 수 있다.
	- 그것이 복잡할 때는 fromJS를 쓰면 된다.
	
	- List
	 - Immutable 의 List 는 배열 대신 사용한다.

## REST API

## Hooks
- function 으로 기존의 Container 와 같은 기능들을 구현 할 수 있다.
- export 하는 const 로 Presenter 와 같은 기능들을 구현 할 수 있다.
- Container 와 Presenter 를 하나의 컴포지션에 구현 할 수 있다.
 - hooks-API 에서 Post 와 useRequest 는 기존의 container, presenter 와 같이 한쪽에 함수를, 한쪽에 프레젠트를 넣듯이 구현 한 것이고,
  Fetch 는 그둘을 컴포넌트 하나에 구현한 것이다.
	때에 따라 편한 방법으로 하면 되겠다.

- useState
  - const [A, B] = useState();
		A는 현재 상태 값,
		B는 이 값을 설정해주는 setter 함수.

- useEffect
  - componentDidMouont, componentDidUpdate 와 같은 기능을 구현한다.
	- componentDidMount 만을 구현하고자 할 때는 아래와 같이 쓸 수 있다.
```
useEffect(() => {
	something();
}, [])
```

## GraphQL 과 Apollo