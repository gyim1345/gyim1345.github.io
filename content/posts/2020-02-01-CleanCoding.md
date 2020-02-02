---
layout: post
title: "clean coding"
description: https://github.com/ryanmcdermott/clean-code-javascript 에 나와있는 direction을 참고하여 현재 프로젝트의https://github.com/gyim1345/sns 코드 before & after
template: "post"
date: "2020-02-01"
---


App.js Before

``` javascript

function App() {
  const [state, setState] = useState([]);
  const [user, setUser] = useState("");
  const [globalUser, setGlobalUser] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);

  const changeToGlobalUser = () => {
    setUser(globalUser);
  };

  const logStatus = () => {
    return loggedIn === false ? setLoggedIn(true) : setLoggedIn(false);
  };

  const logout = () => {
    if (loggedIn === true) {
      setLoggedIn(false);
      setGlobalUser("");
      setUser("");
      alert("logging out")
    }
  };

  return (
    <Router>
      <Link to="/">
        <button type="button" onClick={logout}>
          {loggedIn ? "logout" : "logIn"}
        </button>
      </Link>
      <Link to={`/${globalUser}/TimeLine`} onClick={toTop}>
        {loggedIn && <button type="button">Home</button>}
      </Link>
      <Link
        to={`/${globalUser}`}
        onClick={() => {
          changeToGlobalUser();
          toTop();
        }}
      >
        {loggedIn && <button type="button">UserHome</button>}
      </Link>
      <Switch>
        <Route exact path="/">
          <LoginPage
            setUser={setUser}
            setGlobalUser={setGlobalUser}
            setLoggedIn={setLoggedIn}
            logStatus={logStatus}
            loggedIn={loggedIn}
            globalUser={globalUser}
            setState={setState}
          />
        </Route>
        <Route exact path={`/${globalUser}/TimeLine`}>
          <TimeLinePage
            state={state}
            setState={setState}
            user={user}
            setUser={setUser}
            globalUser={globalUser}
          />
        </Route>
        <Route exact path={`/${user}`}>
          <PostPage
            state={state}
            setState={setState}
            user={user}
            setUser={setUser}
            globalUser={globalUser}
          />
        </Route>
        <Route path={`/${user}/posting/:postingId`}>
          <PostPageDetail
            state={state}
            setState={setState}
            user={user}
            setUser={setUser}
            globalUser={globalUser}
          />
        </Route>
      </Switch>
    </Router>
  );
}

```

App.js After  

- Changed variable names

``` javascript

function App() {
  const [globalStateForTestingPurpose, setGlobalStateForTestingPurpose] = useState([]);
  const [userOfActivePage, setUserOfActivePage] = useState("");
  const [currentUser, setCurrentUser] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);

  const changeToCurrentUser = () => {
    setUserOfActivePage(currentUser);
  };

  const toggleLogInStatus = () => {
    return loggedIn === false ? setLoggedIn(true) : setLoggedIn(false);
  };

  const logout = () => {
    if (loggedIn === true) {
      setLoggedIn(false);
      setCurrentUser("");
      setUserOfActivePage("");
      alert("logging out")
    }
  };

  return (
    <Router>
      <Link to="/">
        <button type="button" onClick={logout}>
          {loggedIn ? "logout" : "logIn"}
        </button>
      </Link>
      <Link to={`/${currentUser}/TimeLine`} onClick={toTop}>
        {loggedIn && <button type="button">Home</button>}
      </Link>
      <Link
        to={`/${currentUser}`}
        onClick={() => {
          changeToCurrentUser();
          toTop();
        }}
      >
        {loggedIn && <button type="button">UserHome</button>}
      </Link>
      <Switch>
        <Route exact path="/">
          <LoginPage
            setUserOfActivePage={setUserOfActivePage}
            setCurrentUser={setCurrentUser}
            setLoggedIn={setLoggedIn}
            toggleLogInStatus={toggleLogInStatus}
            loggedIn={loggedIn}
            currentUser={currentUser}
            setGlobalStateForTestingPurpose={setGlobalStateForTestingPurpose}
          />
        </Route>
        <Route exact path={`/${currentUser}/TimeLine`}>
          <TimeLinePage
            globalStateForTestingPurpose={globalStateForTestingPurpose}
            setGlobalStateForTestingPurpose={setGlobalStateForTestingPurpose}
            userOfActivePage={userOfActivePage}
            setUserOfActivePage={setUserOfActivePage}
            currentUser={currentUser}
          />
        </Route>
        <Route exact path={`/${userOfActivePage}`}>
          <PostPage
            globalStateForTestingPurpose={globalStateForTestingPurpose}
            setGlobalStateForTestingPurpose={setGlobalStateForTestingPurpose}
            userOfActivePage={userOfActivePage}
            setUserOfActivePage={setUserOfActivePage}
            currentUser={currentUser}
          />
        </Route>
        <Route path={`/${userOfActivePage}/posting/:postingId`}>
          <PostPageDetail
            globalStateForTestingPurpose={globalStateForTestingPurpose}
            setGlobalStateForTestingPurpose={setGlobalStateForTestingPurpose}
            userOfActivePage={userOfActivePage}
            setUserOfActivePage={setUserOfActivePage}
            currentUser={currentUser}
          />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
```

TimeLinePage.js
Before

```javascript
function TimeLinePage({ setUser, globalUser }) {
  let follower = [];
  if (globalUser !== undefined) {
    follower = uStore.getFollowerFromUser(globalUser);
  } else follower = [];
  const size = "40%";
  return (
    <>
      {pStore.getuserPosts(globalUser)[0] === undefined ? (
        <li>Go to Your user home and add some stuff RIGHT NOW!</li>
      ) : (
        <div>
          <PostingList
            size={size}
            user={globalUser}
            follower={follower}
            setUser={setUser}
            globalUser={globalUser}
          />
        </div>
      )}
    </>
  );
}
```

TimeLinePage.js
After

- changed variable names  
- action isolation

``` javascript
function TimeLinePage({ setUserOfActivePage, currentUser }) {
  const sizeOfPicture = "40%";

  const checkCurrentUserDataPresent = () => {
    return currentUser !== undefined;
  }

  const getFollowerForCurrentUser = () => {
    return const follower = uStore.getFollowerFromUser(currentUser);
  }

  const setFollowerIsEmpty =() => {
    return const follower = [];
  }

  checkCurrentUserDataPresent ? getFollowerForCurrentUser : setFollowerIsEmpty;


  return (
    <>
      {postingStore.getuserPosts(currentUser)[0] === undefined ? (
        <li>Go to Your user home and add some stuff RIGHT NOW!</li>
      ) : (
        <div>
          <PostingList
            sizeOfPicture={sizeOfPicture}
            userOfActivePage={currentUser}
            follower={follower}
            setUserOfActivePage={setUserOfActivePage}
            currentUser={currentUser}
          />
        </div>
      )}
    </>
  );
}
```

PostPageDetail.js Before

```javascript
function PostPageDetail({ user, setUser, globalUser }) {
  const { postingId } = useParams();
  const size = "80%";
  const postingDetail = postStore.getPost(postingId);

  return (
    <div>
      <PostingList
        postingDetail={postingDetail}
        size={size}
        user={user}
        setUser={setUser}
        globalUser={globalUser}
      />
    </div>
  );
}
```

PostPageDetail.js
After

- changed variable names

```javascript
function PostPageDetail({ userOfActivePage, setUserOfActivePage, currentUser }) {
  const { postingId } = useParams();
  const sizeOfPicture = "80%";
  const postingDetail = postingStore.getPost(postingId);

  return (
    <div>
      <PostingList
        postingDetail={postingDetail}
        sizeOfPicture={sizeOfPicture}
        userOfActivePage={userOfActivePage}
        setUserOfActivePage={setUserOfActivePage}
        currentUser={currentUser}
      />
    </div>
  );
}
```

PostPage Before  

```javascript
function PostPage({ state, setState, user, setUser, globalUser }) {
  const size = "40%";

  return (
    <>
      <UserInfoHead state={state} user={user} />
      <div>
        <Addpost
          state={state}
          setState={setState}
          user={user}
          globalUser={globalUser}
        />
        <PostingList
          size={size}
          user={user}
          setUser={setUser}
          globalUser={globalUser}
        />
      </div>
    </>
  );
}
```

PostPage
After

- changed variable names

```javascript
function PostPage({ globalStateForTestingPurpose, setGlobalStateForTestingPurpose, userOfActivePage, setUserOfActivePage, currentUser }) {
  const sizeOfPicture = "40%";

  return (
    <>
      <UserInfoHead userOfActivePage={userOfActivePage} />
      <div>
        <Addpost
          globalStateForTestingPurpose={globalStateForTestingPurpose}
          setGlobalStateForTestingPurpose={setGlobalStateForTestingPurpose}
          userOfActivePage={userOfActivePage}
          currentUser={currentUser}
        />
        <PostingList
          sizeOfPicture={sizeOfPicture}
          userOfActivePage={userOfActivePage}
          setUserOfActivePage={setUserOfActivePage}
          currentUser={currentUser}
        />
      </div>
    </>
  );
}
```

LoginPage.js Before

```javascript
const LoginPage = ({
  setUser,
  setGlobalUser,
  setLoggedIn,
  logStatus,
  loggedIn,
  globalUser
}) => {
  return (
    <>
      <Login
        setUser={setUser}
        setGlobalUser={setGlobalUser}
        setLoggedIn={setLoggedIn}
        logStatus={logStatus}
        loggedIn={loggedIn}
        globalUser={globalUser}
      />
      <Register />
    </>
  );
};

```

LogInPage
After

- changed variable names

```javascript
const LoginPage = ({
  setUserOfActivePage,
  setCurrentUser,
  setLoggedIn,
  toggleLogInStatus,
  loggedIn,
  currentUser
}) => {
  return (
    <>
      <Login
        setUserOfActivePage={setUserOfActivePage}
        setCurrentUser={setCurrentUser}
        setLoggedIn={setLoggedIn}
        toggleLogInStatus={toggleLogInStatus}
        loggedIn={loggedIn}
        currentUser={currentUser}
      />
      <Register />
    </>
  );
};
```

UserInfoHead.js Before

```javascript
function UserInfoHead({ user }) {
  const userFollowerNumber = uStore.getFollowerNumberOfUser(user);

  return (
    <>
      <img
        src={uStore.getUserImage(user)}
        alt="Smiley face"
        height="42"
        width="42"
      />
      &nbsp;&nbsp;&nbsp;
      {user}
      &nbsp;&nbsp;&nbsp;
      <span> 게시물 갯수</span>
      {pStore.getuserPosts(user).length}
      &nbsp;&nbsp;&nbsp;following 갯수
      {userFollowerNumber}
    </>
  );
}
```

UserHeadInfo.js
After

- changed variable names

```javascript
function UserInfoHead({ userOfActivePage }) {
  const userFollowerNumber = userStore.getFollowerNumberOfUser(userOfActivePage);

  return (
    <>
      <img
        src={userStore.getUserImage(userOfActivePage)}
        alt="Smiley face"
        height="42"
        width="42"
      />
      &nbsp;&nbsp;&nbsp;
      {userOfActivePage}
      &nbsp;&nbsp;&nbsp;
      <span> 게시물 갯수</span>
      {postingStore.getuserPosts(userOfActivePage).length}
      &nbsp;&nbsp;&nbsp;following 갯수
      {userFollowerNumber}
    </>
  );
}
```

Remove.js Before

``` javascript
function Remove({ stateP, setState, globalUser }) {
  const [removed, setRemoved] = useState(false);

  const removeThis = () => {
    if (globalUser === stateP.userName) {
      pStore.removePost(stateP.id);
      setRemoved(true);
      setState(Date.now());
    } else alert("you dont have permission");
  };

  return (
    <>
      <button type="button" onClick={removeThis} id="buttonRemove">
        Remove
      </button>
      {removed && <Redirect to={`/${globalUser}/TimeLine`} />}
    </>
  );
}
```

Remove.js
After

- changed variable names
- action isolation

```javascript
function Remove({ posting, setGlobalStateForTestingPurpose, currentUser }) {
  const [removed, setRemoved] = useState(false);

  const checkOwnerShipOfPost = () => {
    return currentUser === posting.userName;
  }

  const RemovePostingFromPostStore = () => {
    return postingStore.removePost(posting.id);
  }


  const removeThis = () => {
    checkOwnerShipOfPost 
      ? (
          RemovePostingFromPostStore;
          setRemoved(true);
          setGlobalStateForTestingPurpose(Date.now());
        )
      : alert("you dont have permission")
    }
```

Register.js Before

```javascript
const Register = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = data => {
    if (!uStore.userList.find(user => user.name === data.Id)){
      uStore.createUser(data.Id, data.Password);
      alert("Registered! Please login!") 
    }
    else alert("already registered");
  };
```

Register.js
After

- changed variable names
- action isolation

```javascript
const Register = () => {
  const { register, handleSubmit } = useForm();
  const checkRegistered = () => {
    return !userStore.userList.find(user => user.name === data.Id);
  };
  const createUserOnRegister = () => {
    return userStore.createUser(data.Id, data.Password)
  }

  const onSubmit = data => {
    checkRegistered ? (
      createUserOnRegister;
      alert("Registered! Please login!") 
    )
    : alert("already registered");
  };
```

PostigList.js Before

```javascript
  function PostingList({
  postingDetail,
  size,
  user,
  follower,
  setUser,
  globalUser
}) {
  let postings =
    postingDetail === undefined
      ? pStore.postList.filter(post => post.userName === user)
      : [postingDetail];
  const { comments } = cStore;

  if (follower !== undefined) {
    const temppostings = [];
    follower.forEach(person => temppostings.push(pStore.getuserPosts(person)));
    const [temp] = temppostings;
    postings = pStore.postList.filter(post => post.userName === user);
    postings.push(...temp);
  }

  const [inputa, setInputa] = useState("");
  const [state, setState] = useState([]);

  const onChangeComment = e => {
    setInputa(e.target.value);
  };

  const addComment = (_, postId) => {
    cStore.createComment(postId, inputa, globalUser);
    setState(Date.now());
  };

  return (
    <>
      <div>
        {postings.map(posting => (
          <ul key={posting.id}>
            <Posting
              posting={posting}
              comments={comments}
              state={state}
              setState={setState}
              addComment={addComment}
              onChangeComment={onChangeComment}
              size={size}
              user={user}
              setUser={setUser}
              globalUser={globalUser}
            />
          </ul>
        ))}
      </div>
    </>
  );
}
```

PostingList.js
After

- changed variable names
- action isolation

```javascript
function PostingList({
  postingDetail,
  sizeOfPicture,
  userOfActivePage,
  follower,
  setUserOfActivePage,
  currentUser
}) {
  const [input, setInput] = useState("");
  const [globalStateForTestingPurpose, setGlobalStateForTestingPurpose] = useState([]);
  const { comments } = commentStore;
  
  const distinguishPostings = () => {
    return (postingDetail === undefined
      ? postingStore.postList.filter(post => post.userName === userOfActivePage)
      : [postingDetail]
    );
  };
  const addFollowerPostingsToCurrentPostings = () => {
    return 
      if (follower !== undefined) {
        follower.forEach(person => postings = [...postings, ...postingStore.getuserPosts(person));
      }
  };
  
  let postings = distinguishPosting();
  addFollowerPostingsToCurrentPostings();
  ```

Posting.js Before

```javascript
function Posting({
  posting,
  comments,
  state,
  setState,
  addComment,
  onChangeComment,
  size,
  user,
  setUser,
  globalUser
}) {
  const [input] = useState([]);

  const increaseLike = () => {
    if (!posting.like.includes(globalUser)) posting.like.push(globalUser);
    else if (posting.like.includes(globalUser))
      posting.like = posting.like.filter(el => el !== globalUser);
    setState(Date.now());
  };

  const changeUser = () => {
    setUser(posting.userName);
  };

  return (
    <div>
      <h1>
        <Link
          to={`/${posting.userName}`}
          onClick={() => {
            changeUser();
            toTop();
          }}
        >
          <img src={uStore.getUserImage(posting.userName)} alt="" width={50} />
          {posting.userName}
        </Link>
      </h1>
      <Link to={`/${user}/posting/${posting.id}`} onClick={toTop}>
        <img src={posting.imageUrl} alt="" width={size} />
        <li>
          [Title]:
          {posting.title}
        </li>
        <li>
          Like:
          {posting.like.length}
        </li>
        {/* [Id]:
        {posting.id}
        Image: */}
      </Link>
      <button type="button" onClick={increaseLike} id="increaseLike">
        Like
      </button>
      <Route exact path={`/${user}/posting/${posting.id}`}>
        <Edit
          stateP={posting}
          state={state}
          setState={setState}
          user={user}
          globalUser={globalUser}
        />
        <Remove
          stateP={posting}
          state={state}
          setState={setState}
          user={user}
          globalUser={globalUser}
        />
        <Comment
          posting={posting}
          comments={comments}
          state={state}
          setState={setState}
          user={user}
          globalUser={globalUser}
        />
        <input
          value={input[posting.id]}
          onChange={e => onChangeComment(e, posting.id)}
        />
        <button
          type="button"
          onClick={e => addComment(e, posting.id)}
          id="buttonAddComment"
        >
          AddComment
        </button>
      </Route>
    </div>
  );
}
```

Posting.js
After

- changed variable names
- action isolation

```javascript
function Posting({
  posting,
  comments,
  globalStateForTestingPurpose,
  setGlobalStateForTestingPurpose,
  addComment,
  onChangeComment,
  sizeOfPicture,
  userOfActivePage,
  setUserOfActivePage,
  currentUser
}) {
  const [input] = useState([]);

  const findIfIClickedLike = () => {
    return posting.like.includes(currentUser)
  }

  const deleteLike = () => {
    return posting.like = posting.like.filter(el => el !== currentUser);
  }

  const addLike = () => {
    return postings.like = [...postings.like, currentUser];
  }

  const increaseLikeOnClick = () => {
    !findIfIClickedLike ? addLike : deleteLike;
    setGlobalStateForTestingPurpose(Date.now());
  };

//...
      <button type="button" onClick={increaseLikeOnClick} id="increaseLike">
        Like
      </button>
      <Route exact path={`/${userOfActivePage}/posting/${posting.id}`}>
        <Edit
          posting={posting}
          globalStateForTestingPurpose={globalStateForTestingPurpose}
          setGlobalStateForTestingPurpose={setGlobalStateForTestingPurpose}
          userOfActivePage={userOfActivePage}
          currentUser={currentUser}
        />
        <Remove
          posting={posting}
          globalStateForTestingPurpose={globalStateForTestingPurpose}
          setGlobalStateForTestingPurpose={setGlobalStateForTestingPurpose}
          userOfActivePage={userOfActivePage}
          currentUser={currentUser}
        />
        <Comment
          posting={posting}
          comments={comments}
          globalStateForTestingPurpose={globalStateForTestingPurpose}
          setGlobalStateForTestingPurpose={setGlobalStateForTestingPurpose}
          userOfActivePage={userOfActivePage}
          currentUser={currentUser}
        />

```

Login.js Before

```javascript
const Login = ({
  setUser,
  setGlobalUser,
  setLoggedIn,
  logStatus,
  loggedIn,
  globalUser
}) => {
  const { register, handleSubmit, watch, errors } = useForm();

  const onSubmit = data => {
    if (uStore.userList.find(item => item.name === data.Id) === undefined)
      // 입력한 아이디가 store에 없을 경우
      alert("check id");
    else if (uStore.getUserPassword(data.Id) !== data.Password)
      // 입력한 아이디의 비번이 안 맞을 경우
      alert("check password");
    else {
      setGlobalUser(data.Id);
      setUser(data.Id);
      logStatus();
      alert("logged in");
      setLoggedIn(true);
    }
  };

```

Login.js
After

- changed variable names
- action isolation

```javascript
const Login = ({
  setUserOfActivePage,
  setCurrentUser,
  setLoggedIn,
  toggleLogInStatus,
  loggedIn,
  currentUser
}) => {
  const { register, handleSubmit, watch, errors } = useForm();

  const checkIdIsRegistered = () => {
    return userStore.userList.find(item => item.name === data.Id) === undefined
  }

  const checkPassword = () => {
    return userStore.getUserPassword(data.Id) !== data.Password
  }

  const performLogIn = () => {
    return (
      setCurrentUser(data.Id);
      setUserOfActivePage(data.Id);
      toggleLogInStatus();
      alert("logged in");
      setLoggedIn(true);
    )
  }

  const onSubmit = data => {
      checkIdIsRegistered
        ? alert("check id")
        : checkPassword
          ? alert("check password")
          : performLogIn;
  };
```

Edit.js Before

```javascript
function Edit({ stateP, setState, cid, indexC, globalUser }) {
  const [edit, setEdit] = useState([""]);
  const input = [];

  const editThis = () => {
    if (stateP.userName !== globalUser && indexC === undefined)
      alert("you dont have permission");
    else if (
      pStore.getPost(stateP.id) === stateP &&
      stateP.userName === globalUser
    ) {
      pStore.getPost(stateP.id).title = edit[stateP.id];
    } else if (
      cStore.getComment(indexC + 1) === stateP[cid] &&
      cStore.getComment(indexC + 1).userWritten === globalUser
    ) {
      cStore.getComment(indexC + 1).title = edit[stateP.id];
    } else alert(`you dont have permission ${globalUser}`);
    setState(Date.now());
  };

  const onEdit = (e, Id) => {
    edit[Id] = e.target.value;
    setEdit(edit);
  };

```

Edit.js
After

- changed variable names
- action isolation

```javascript
function Edit({ posting, setGlobalStateForTestingPurpose, commentId, indexOfComment, currentUser }) {
  const [edit, setEdit] = useState([""]);
  const input = [];

  const checkOwnershipOfPost = () => {
    return posting.userName !== currentUser && indexOfComment === undefined;
  }
  
  const clickedIsPostAndIsMine = () => {
    return  postingStore.getPost(posting.id) === posting && posting.userName === currentUser;
  }

  const clickedIsCommentAndIsMine = () => {
    return commentStore.getComment(indexOfComment + 1) === posting[commentId] && commentStore.getComment(indexOfComment + 1).userWritten === currentUser;
  }

  const editPost = () => {
    return postingStore.getPost(posting.id).title = edit[posting.id];
  }

  const editComment = () =>{
    return commentStore.getComment(indexOfComment + 1).title = edit[posting.id];
  }
  const editThis = () => {
    checkOwnershipOfPost 
      ? alert("you dont have permission") 
      : clickedIsPostAndIsMine 
        ? editPost 
        : clickedIsCommentAndIsMine 
          ? editComment 
          : alert(`you dont have permission ${currentUser}`);
    setGlobalStateForTestingPurpose(Date.now());
  };
```

Comment.js Before

```javascript
function Comment({ posting, comments, state, setState, globalUser }) {
  const found = comments.filter(el => el.postLId === posting.id);

  // if (comments[posting.id - 1] !== undefined) {
  return (
    <>
      {found.map((postings, i) => (
        <ul key={postings.id}>
          <li>
            [comment]:
            {postings.title}
            [id]:
            {i}
          </li>
          <Edit
            stateP={found}
            state={state}
            setState={setState}
            cid={i}
            indexC={comments.indexOf(postings)}
            globalUser={globalUser}
          />
        </ul>
      ))}
    </>
  );
  // }
  // return "";
}
```

Comment.js
After

- changed variable names

```javascript
function Comment({ posting, comments, globalStateForTestingPurpose, setGlobalStateForTestingPurpose, currentUser }) {
  const commentsOfPosting = comments.filter(el => el.postLId === posting.id);

  return (
    <>
      {commentsOfPosting.map((postings, i) => (
        <ul key={postings.id}>
          <li>
            [comment]:
            {postings.title}
            [id]:
            {i}
          </li>
          <Edit
            posting={commentsOfPosting}
            globalStateForTestingPurpose={globalStateForTestingPurpose}
            setGlobalStateForTestingPurpose={setGlobalStateForTestingPurpose}
            commentId={i}
            indexOfComment={comments.indexOf(postings)}
            currentUser={currentUser}
          />
        </ul>
      ))}
    </>
  );
}
```

AddPost.js Before

```javascript
function AddPost({ setState, user, globalUser }) {
  const [input, setInput] = useState("");

  const onChange = e => {
    setInput(e.target.value);
  };

  const addPost = () => {
    if (user !== globalUser) alert("go to ur page fucker");
    else {
      pStore.createPost(input, globalUser);
      setState(Date.now());
      setInput("");
    }
  };
```

AddPost.js
After

- changed variable names
- action isolation

```javascript
function AddPost({ setGlobalStateForTestingPurpose, userOfActivePage, currentUser }) {
  const [input, setInput] = useState("");

  const onChange = e => {
    setInput(e.target.value);
  };

  const checkOwnershipOfPost = () => {
    return userOfActivePage !== currentUser;
  }

  const addPostToMyPage = () => {
    return postingStore.createPost(input, currentUser);
  }

  const addPost = () => {
    checkOwnershipOfPost 
      ? alert("go to ur page fucker") 
      : (
          addPostToMyPage; 
          setGlobalStateForTestingPurpose(Date.now()); 
          setInput("");
        )
  };
```
