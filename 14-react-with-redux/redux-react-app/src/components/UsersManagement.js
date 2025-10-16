import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getUsersReqAction, postUsersReqAction } from '../async-actions/actions.js'


const UsersManagement = () => {
    const {emails, loading : getLoading, error : getError} = useSelector(state => state.getUsersReq)
    const {names, loading : postLoading, error: postError} = useSelector(state => state.postUsersReq)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getUsersReqAction())
    }, [dispatch])
  return (
    <div>
      {getLoading && <p>'loading...'</p>}
      <div>
        {emails.map(obj => <p key={obj.id}>{obj.email}</p>)}
      </div>
      {getError && <p>{getError}</p>}
      {postLoading && <p>'loading...'</p>}
      <button onClick={() => dispatch(postUsersReqAction([5, 2]))}>Post Users</button>
            <div>
        {names.map((name, index) => <p key={index}>{name}</p>)}
        {postError && <p>{postError}</p>}
      </div>
    </div>
  
  )
}

export default UsersManagement
