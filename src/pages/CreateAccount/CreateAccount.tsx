import { useCallback, useState } from 'react'
import styles from './CreateAccount.module.scss'
import { isValidEmail } from '../../logic/logic'
import { useAppDispatch } from '../../app/hook'
import { createAccount, ICreateAccount } from './CreateAccountAPI'
import { useNavigate } from 'react-router-dom'
import { routes } from '..'
import { showAlert } from '../../component/arlet/arlet'

function CreateAccount() {
    const navigate = useNavigate()
    const dispatch = useAppDispatch()
    const [input, setInput] = useState<ICreateAccount>({
        account: '',
        password: '',
        name: '',
        email: '',
        gender: false,
        role: 'Customer'
    })

    const [error, setError] = useState<{
        account: boolean,
        password: boolean,
        phoneNumber: boolean
        name: boolean
        address: boolean
        email: boolean
    }>({
        account: false,
        password: false,
        phoneNumber: false,
        name: false,
        address: false,
        email: false,
    })

    const onChangeInput = useCallback((key: string, input: string | number | boolean | File) => {
        switch (key) {
            case 'account':
                setInput(preData => {
                    return {
                        ...preData,
                        account: input as string
                    }
                })
                setError(preData => {
                    return {
                        ...preData,
                        account: false
                    }
                })
                break
            case 'password':
                setInput(preData => {
                    return {
                        ...preData,
                        password: input as string
                    }
                })
                setError(preData => {
                    return {
                        ...preData,
                        password: false
                    }
                })
                break
            case 'phoneNumber':
                setInput(preData => {
                    return {
                        ...preData,
                        phoneNumber: input as string
                    }
                })
                setError(preData => {
                    return {
                        ...preData,
                        phoneNumber: false
                    }
                })
                break
            case 'name':
                setInput(preData => {
                    return {
                        ...preData,
                        name: input as string
                    }
                })
                setError(preData => {
                    return {
                        ...preData,
                        name: false
                    }
                })
                break
            case 'address':
                setInput(preData => {
                    return {
                        ...preData,
                        address: input as string
                    }
                })
                setError(preData => {
                    return {
                        ...preData,
                        address: false
                    }
                })
                break
            case 'email':
                setInput(preData => {
                    return {
                        ...preData,
                        email: input as string
                    }
                })
                setError(preData => {
                    return {
                        ...preData,
                        email: false
                    }
                })
                break
            case 'gender':
                setInput(preData => {
                    return {
                        ...preData,
                        gender: input as boolean
                    }
                })
                break
        }
    }, [])

    const onSubmit = useCallback(async () => {
        showAlert("Create success", 'success', { insert: 'top', container: 'top-center' });
        if (!input.account) {
            setError(preData => {
                return {
                    ...preData,
                    account: true
                }
            })
            return
        }
        if (input.password.length < 10) {
            setError(preData => {
                return {
                    ...preData,
                    password: true
                }
            })
            return
        }
        if (!input.name) {
            setError(preData => {
                return {
                    ...preData,
                    name: true
                }
            })
            return
        }
        if (!isValidEmail(input.email)) {
            setError(preData => {
                return {
                    ...preData,
                    email: true
                }
            })
            return
        }

        const res = await dispatch(createAccount(input))

        if (res.payload.status === 200) {
            navigate(routes.home)
        }
    }, [input, dispatch, navigate])

    return <div className="px-3 py-4 d-flex flex-column">
        <label
            className='align-self-center'
            htmlFor="avatar"
            style={{
                width: '100px'
            }}
        >
            <div className='d-flex justify-content-center mb-4'>
                <img className={`${styles.fitImg}`} src="https://i.pinimg.com/736x/3f/3c/9a/3f3c9a765bdeb8b74d1fe6c5084f6b34.jpg" alt="error"></img>
            </div>
        </label>

        <label htmlFor="phoneNumber" className="form-label">Phone Number</label>
        <input type="number"
            value={input.phoneNumber}
            onChange={(e) => {
                onChangeInput("phoneNumber", e.target.value)
            }}
            id="phoneNumber" className="form-control"></input>
        {
            error.phoneNumber ?
                <div className="form-text">
                    Invalid phone number. Please enter 10 digits.
                </div> :
                undefined
        }

        <label htmlFor="name" className="form-label pt-4">Name</label>
        <input type="text"
            value={input.name}
            onChange={(e) => {
                onChangeInput("name", e.target.value)
            }}
            id="name" className="form-control"></input>
        {
            error.name ?
                <div className="form-text">
                    Please fill your name
                </div>
                :
                undefined
        }

        <label htmlFor="account" className="form-label pt-4">Account</label>
        <input type="text"
            value={input.account}
            onChange={(e) => {
                onChangeInput("account", e.target.value)
            }}
            id="account" className="form-control"></input>
        {
            error.account ?
                <div className="form-text">
                    Please fill your account
                </div>
                :
                undefined
        }

        <label htmlFor="password" className="form-label pt-4">Password</label>
        <input type="password"
            value={input.password}
            onChange={(e) => {
                onChangeInput("password", e.target.value)
            }}
            id="password" className="form-control"></input>
        {
            error.password ?
                <div className="form-text">
                    Password must be at least 10 letters
                </div>
                :
                undefined
        }

        <label htmlFor="address" className="form-label pt-4">Address</label>
        <input type="text"
            value={input.address}
            onChange={(e) => {
                onChangeInput("address", e.target.value)
            }}
            id="address" className="form-control"></input>

        <label htmlFor="email" className="form-label pt-4">Email</label>
        <input type="email"
            value={input.email}
            onChange={(e) => {
                onChangeInput("email", e.target.value)
            }}
            id="email" className="form-control"></input>
        {
            error.email ?
                <div className="form-text">
                    Please enter valid email @gmail.com
                </div>
                :
                undefined
        }
        <label htmlFor="gender" className="form-label pt-4">Gender</label>
        <select defaultValue={1} id="gender" className="form-select" aria-label="Default select example">
            <option value="1">Male</option>
            <option value="2">Female</option>
            <option value="3">Other</option>
        </select>

        <button type="button"
            onClick={onSubmit}
            className="btn btn-primary mt-5">Create New Account</button>
    </div>
}

export default CreateAccount