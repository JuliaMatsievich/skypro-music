import * as S from './index.styles'

export const NotFound = () => {
  return (
    <S.Container>
      <S.ErrorTitle>Ошибка 404</S.ErrorTitle>
		<S.ErrorContent>Упс, кажется такой страницы не существует.....</S.ErrorContent>
    </S.Container>
  )
}
