import AuthorInstruction from "@/components/AuthorInstruction"
import { _GET } from "@/request/request"

async function AuthorInstructionPage() {
  const response = await _GET('authorinstruct/readAll')
  console.log(response)

  return (
    <AuthorInstruction pageData={response[0]} />
  )
}

export default AuthorInstructionPage