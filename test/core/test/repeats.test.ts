import { afterAll, describe, expect, test } from 'vitest'

const testNumbers: number[] = []

describe('testing it/test', () => {
  const result = [1, 1, 1, 1, 1, 2, 2, 2]

  test('test 1', () => {
    testNumbers.push(1)
  }, { repeats: 5 })

  test('test 2', () => {
    testNumbers.push(2)
  }, { repeats: 3 })

  test.fails('test 3', () => {
    testNumbers.push(3)
    expect(testNumbers).toStrictEqual(result)
  }, { repeats: 1 })

  afterAll(() => {
    result.push(3)
    expect(testNumbers).toStrictEqual(result)
  })
})

const describeNumbers: number[] = []

describe('testing describe', () => {
  test('test 1', () => {
    describeNumbers.push(1)
  })
}, { repeats: 3 })

afterAll(() => {
  expect(describeNumbers).toStrictEqual([1, 1, 1])
})

const retryNumbers: number[] = []

describe('testing repeats with retry', () => {
  const result = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
  test('test 1', () => {
    retryNumbers.push(1)
  }, { repeats: 5, retry: 2 })

  afterAll(() => {
    expect(retryNumbers).toStrictEqual(result)
  })
})
