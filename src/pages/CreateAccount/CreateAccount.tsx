import { useCallback, useState } from 'react'
import styles from './CreateAccount.module.scss'
import { isValidEmail, isValidPhoneNumber } from '../../logic/logic'

function CreateAccount() {
    const [input, setInput] = useState<{
        phoneNumber: string
        name: string
        address: string
        email: string
        gender: number
    }>({
        phoneNumber: '',
        name: '',
        address: '',
        email: '',
        gender: 0
    })

    const [error, setError] = useState<{
        phoneNumber: boolean
        name: boolean
        address: boolean
        email: boolean
    }>({
        phoneNumber: false,
        name: false,
        address: false,
        email: false,
    })

    const onChangeInput = useCallback((key: string, input: string | number) => {
        switch (key) {
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
                        gender: input as number
                    }
                })
                break
        }
    }, [])

    const onSubmit = useCallback(() => {
        if (!isValidPhoneNumber(input.phoneNumber)) {
            setError(preData => {
                return {
                    ...preData,
                    phoneNumber: true
                }
            })
        }
        if (!input.name) {
            setError(preData => {
                return {
                    ...preData,
                    name: true
                }
            })
        }
        if (!isValidEmail(input.email)) {
            setError(preData => {
                return {
                    ...preData,
                    email: true
                }
            })
        }
    }, [input.email, input.name, input.phoneNumber])

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
            <input type="file" id="avatar" style={{ display: 'none' }} accept=".png, .jpg, .jpeg"></input>
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