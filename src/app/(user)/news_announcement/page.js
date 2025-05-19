import NewsAnnouncementTab from '@/components/NewsAnnouncementTab'
import { _GET } from '@/request/request'

async function NewsAnnouncmentPage() {
  const response = await _GET(`newsAnnouncement/readAll`, 'core')

  return (
    <NewsAnnouncementTab NewsAnnouncementData={response ? response : {}} />
  )
}

export default NewsAnnouncmentPage
