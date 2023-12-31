import { environment } from 'src/environments/environment'
import {
  formatURL,
  hasProperties,
  isEmptyObject,
  isExists,
  localStorageGetItem,
  localStorageSetItem
} from './helpers'

describe('IS EMPTY OBJECT', () => {
  // Tests that passing an empty object returns true
  it('test empty object', () => {
    expect(isEmptyObject({})).toBe(true)
  })

  // Tests that passing an object with non-empty properties returns false
  it('test non empty object', () => {
    expect(isEmptyObject({ a: 1 })).toBe(false)
  })

  // Tests that passing null returns false
  it('test null', () => {
    expect(isEmptyObject(null)).toBe(false)
  })

  // Tests that passing undefined returns false
  it('test undefined', () => {
    // eslint-disable-next-line no-undefined
    expect(isEmptyObject(undefined)).toBe(false)
  })

  // Tests that passing an object with non-enumerable properties returns true
  it('test non enumerable properties', () => {
    const obj = Object.create({}, { a: { value: 1, enumerable: false } })
    expect(isEmptyObject(obj)).toBe(true)
  })
})

describe('IS EXIST', () => {
  // Tests that isExists returns true for a non-null and non-undefined value
  it('test non null undefined', () => {
    expect(isExists('hello')).toBe(true)
    expect(isExists(0)).toBe(true)
    expect(isExists(false)).toBe(true)
  })

  // Tests that isExists returns false for null
  it('test null', () => {
    expect(isExists(null)).toBe(false)
  })

  // Tests that isExists returns false for undefined
  it('test undefined', () => {
    // eslint-disable-next-line no-undefined
    expect(isExists(undefined)).toBe(false)
  })

  // Tests that isExists returns true for an empty string
  it('test empty string', () => {
    expect(isExists('')).toBe(true)
  })

  // Tests that isExists returns true for the number 0
  it('test number 0', () => {
    expect(isExists(0)).toBe(true)
  })

  // Tests that isExists returns true for a boolean value of false
  it('test boolean false', () => {
    expect(isExists(false)).toBe(true)
  })
})

describe('hasProperties function', () => {
  // Tests that hasProperties returns true when all keys are present in the object and keys are an array
  it('test has properties with object and array of keys', () => {
    const obj = { a: 1, b: 2, c: 3 }
    const keys = ['a', 'b']
    expect(hasProperties(obj, keys)).toBe(true)
  })

  // Tests that hasProperties returns true when all keys are present in the object and keys are a string
  it('test has properties with object and string of keys', () => {
    const obj = { a: 1, b: 2, c: 3 }
    const keys = 'a'
    expect(hasProperties(obj, keys)).toBe(true)
  })

  // Tests that hasProperties returns true when keys are an empty array
  it('test has properties with empty array of keys', () => {
    const obj = { a: 1, b: 2, c: 3 }
    const keys: string | string[] = []
    expect(hasProperties(obj, keys)).toBe(true)
  })

  // Tests that hasProperties returns true when object is an empty object
  it('test has properties with empty object', () => {
    const obj = {}
    const keys = ['a', 'b']
    expect(hasProperties(obj, keys)).toBe(false)
  })

  // Tests that hasProperties returns false when object is undefined
  it('test has properties with undefined object', () => {
    // eslint-disable-next-line no-undefined
    const obj = undefined
    const keys = ['a', 'b']
    expect(hasProperties(obj!, keys)).toBe(false)
  })

  // Tests that hasProperties returns false when keys are undefined
  it('test has properties with undefined keys', () => {
    const obj = { a: 1, b: 2, c: 3 }
    // eslint-disable-next-line no-undefined
    const keys = undefined
    expect(hasProperties(obj, keys!)).toBe(false)
  })
})

describe('localStorageSetItem function', () => {
  // Tests that a string key and a string value are stored in localStorage
  it('test string key and value', () => {
    const key = 'test key'
    const value = 'test value'
    localStorageSetItem(key, value)
    expect(localStorage.getItem(key)).toBe(JSON.stringify(value))
  })

  // Tests that a number key and a number value are stored in localStorage
  it('test number key and value', () => {
    const key = 'test key'
    const value = 123
    localStorageSetItem(key, value)
    expect(localStorage.getItem(key)).toBe(JSON.stringify(value))
  })

  // Tests that an object key and an object value are stored in localStorage
  it('test object key and value', () => {
    const key = 'test key'
    const value = { a: 1, b: 'two' }
    localStorageSetItem(key, value)
    expect(localStorage.getItem(key)).toBe(JSON.stringify(value))
  })

  // Tests that an array of strings, numbers, and objects is stored in localStorage
  it('test array key and value', () => {
    const key = 'test key'
    const value = [1, 'two', { a: 3 }]
    localStorageSetItem(key, value)
    expect(localStorage.getItem(key)).toBe(JSON.stringify(value))
  })
})

describe('localStorageGetItem function', () => {
  // Tests that the function returns the correct value when a valid key is passed and the value exists in localStorage
  it('test valid key with existing value', () => {
    localStorage.setItem('key1', JSON.stringify({ name: 'John', age: 30 }))
    expect(localStorageGetItem<{ name: string; age: number }>('key1')).toEqual({
      name: 'John',
      age: 30
    })
  })

  // Tests that the function returns null when a valid key is passed but the value does not exist in localStorage
  it('test valid key with non existing value', () => {
    expect(
      localStorageGetItem<{ name: string; age: number }>('key2')
    ).toBeNull()
  })

  // Tests that the function returns null when an invalid key is passed
  it('test invalid key', () => {
    expect(localStorageGetItem<{ name: string; age: number }>('')).toBeNull()
  })

  // Tests that the function logs an error message when JSON parsing fails
  it('test JSON parsing fails', () => {
    localStorage.setItem('key3', 'invalid JSON')
    const consoleSpy = jest.spyOn(console, 'error').mockImplementation(() => {})
    expect(
      localStorageGetItem<{ name: string; age: number }>('key3')
    ).toBeNull()
    expect(consoleSpy).toHaveBeenCalled()
    consoleSpy.mockRestore()
  })

  // Tests that the function returns the correct value when a valid key is passed and the value is a complex object
  it('test valid key with complex object value', () => {
    const complexObject = {
      name: 'John',
      age: 30,
      address: { street: '123 Main St', city: 'Anytown' }
    }
    localStorage.setItem('key4', JSON.stringify(complexObject))
    expect(localStorageGetItem<typeof complexObject>('key4')).toEqual(
      complexObject
    )
  })
})

describe('formatURL function', () => {
  // Tests that the function returns the same URL if no params are provided
  it('test no params', () => {
    expect(formatURL(`${environment.BASE_URL}`)).toBe(`${environment.BASE_URL}`)
  })

  // Tests that the function replaces a single parameter in the URL
  it('test single param', () => {
    expect(formatURL(`${environment.BASE_URL}:id`, { id: '123' })).toBe(
      `${environment.BASE_URL}:123`
    )
  })

  // Tests that the function replaces multiple parameters in the URL
  it('test multiple params', () => {
    expect(
      formatURL(`${environment.BASE_URL}:id/:name`, {
        id: '123',
        name: 'john'
      })
    ).toBe(`${environment.BASE_URL}:123/:john`)
  })

  // Tests that the function handles empty URL
  it('test empty url', () => {
    expect(formatURL('', { id: '123' })).toBe('')
  })

  // Tests that the function handles empty params
  it('test empty params', () => {
    expect(formatURL(`${environment.BASE_URL}`)).toBe(`${environment.BASE_URL}`)
  })

  // Tests that the function handles params with no matching keys in URL
  it('test no matching keys', () => {
    expect(formatURL(`${environment.BASE_URL}:id`, { name: 'john' })).toBe(
      `${environment.BASE_URL}:id`
    )
  })
})
