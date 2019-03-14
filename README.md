# Learning-React

## Todo project

### functional component 에서 파라미터로 전달되는 props 비구조화 할당하기.
-  example
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

- 위와같이 functional component 의 경우	const TodoListTemplate = (props) => {} 의 형태로 전달된다.
	그것을 비구조화 할당하여 ({form, children})의 형태로 전달했다.
	이 컴포넌트는 두가지 props를 전달받는데, 위와 같은 방법으로 비구조화 할당하여 나누어 전달하면 필요한 부분에 맞추어 props를 배치할 수 있어 편하다.
	여러 종류의 JSX를 컴포넌트의 props로 넣을때 좋다.

### styled-components 사용시 조건 설정하기.
- (예)


const SText = styled.div`
	flex: 1;
	word-break: break-all;
	/* &.done {
		text-decoration: line-through;
	} */
	/* styled-components 와 bind 로 css를 구성할 때 달리 해야할 부분이다.
		bind를 사용할 때는 위와같이 &.done 과 같이 사용할 수 있지만
		styled-components 를 쓸 때는 아래와 같이 효과를 설정하고,
		해당 태그의 prosp를 가져와서 그 값의 boolean 값을 확인하고 해당 값을 지정해야한다.
	 */
	text-decoration: ${(props) => (props.current ? 'line-through' : 'none')};
`;

- styled-components를 이요하게 되면 태그에서 바로 조건을 설정하는 것도 그 조건을 이용하는 방식도 기존의 css와 조금 다르다.
	조건을 걸 때는, 
	<Tick type="checkbox" checked={done} readOnly />
		<SText current={done === true}>{children}</SText>
	와 같이 설정하고 current 값을 가져와서 확인하고 해당 값을 지정하면 된다.
