import { useRouter } from "next/router";

export default function Message() {
  console.log('render')
  const router = useRouter();
  const {
    query: { messageId, add },
  } = router;
  if(!messageId) return <p>Loading...</p>

  console.log('===', messageId)
  console.log(global.window && window.location)
  console.log('add', add)

  return <p>{messageId}</p>
}
