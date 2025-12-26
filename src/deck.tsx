import { SlideViewer } from '@/components/slides/slide-viewer'
import { Slides } from '@/slides'

export default function Deck() {
  return (
    <SlideViewer>
      <Slides />
    </SlideViewer>
  )
}
