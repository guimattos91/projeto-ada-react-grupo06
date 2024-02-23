export const myCustomHelper = (): null => null

export const generateId = (): string => {
  let id: string
  const generatedIds = new Set<string>()

  do {
    const idNumber = Math.floor(Math.random() * 100000)
    id = `id-${idNumber}`
  } while (generatedIds.has(id))

  generatedIds.add(id)
  return id
}
