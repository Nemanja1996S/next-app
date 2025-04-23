
interface Props {
    params: { id: number, photoId: number }
}
const PhotoId = ({ params: { id, photoId } }: Props) => {
  return (
    <div>User id is {id}, photo id is {photoId}</div>
  )
}

export default PhotoId