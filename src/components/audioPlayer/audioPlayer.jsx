import * as S from './audioPlayer.styles'

export const Player = ({isLoading}) => {
  return (
    <S.Bar>
      <S.BarContent>
        <S.BarPlayerProgress></S.BarPlayerProgress>
        <S.BarPlayerBlock>
          <S.BarPlayer>
            <S.PlayerControls>
              <S.PlayerBtnPrev>
                <S.PlayerBtnPrevSvg alt="prev">
                  <use xlinkHref="img/icon/sprite.svg#icon-prev"></use>
                </S.PlayerBtnPrevSvg>
              </S.PlayerBtnPrev>
              <S.PlayerBtnPlay>
                <S.PlayerBtnPlaySvg alt="play">
                  <use xlinkHref="img/icon/sprite.svg#icon-play"></use>
                </S.PlayerBtnPlaySvg>
              </S.PlayerBtnPlay>
              <S.PlayerBtnNext>
                <S.PlayerBtnNextSvg alt="next">
                  <use xlinkHref="img/icon/sprite.svg#icon-next"></use>
                </S.PlayerBtnNextSvg>
              </S.PlayerBtnNext>
              <S.PlayerBtnRepeat className="_btn-icon">
                <S.PlayerBtnRepeatSvg alt="repeat">
                  <use xlinkHref="img/icon/sprite.svg#icon-repeat"></use>
                </S.PlayerBtnRepeatSvg>
              </S.PlayerBtnRepeat>
              <S.PlayerBtnShuffle className="_btn-icon">
                <S.PlayerBtnShuffleSvg alt="shuffle">
                  <use xlinkHref="img/icon/sprite.svg#icon-shuffle"></use>
                </S.PlayerBtnShuffleSvg>
              </S.PlayerBtnShuffle>
            </S.PlayerControls>

            <S.TrackPlay>
              {isLoading ?

                <S.TrackPlayContain>
                  <S.SkeletonTrackPlayImage></S.SkeletonTrackPlayImage>
                  <S.SkeletonTrackPlayAuthor></S.SkeletonTrackPlayAuthor>
                  <S.SkeletonTrackPlayAlbum></S.SkeletonTrackPlayAlbum>
                </S.TrackPlayContain>

              :

              <S.TrackPlayContain>
                <S.TrackPlayImage>
                  <S.TrackPlaySvg alt="music">
                    <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                  </S.TrackPlaySvg>
                </S.TrackPlayImage>

                <S.TrackPlayAuthor>
                  <S.TrackPlayAuthorLink href="http://">
                    Ты та...
                  </S.TrackPlayAuthorLink>
                </S.TrackPlayAuthor>

                <S.TrackPlayAlbum className="track-play__album">
                  <S.TrackPlayAlbumLink href="http://">
                    Баста
                  </S.TrackPlayAlbumLink>
                </S.TrackPlayAlbum>

              </S.TrackPlayContain>
              }


              <S.TrackPlayLikeDis>
                <S.TrackPlayLike className="_btn-icon">
                  <S.TrackPlayLikeSvg alt="like">
                    <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
                  </S.TrackPlayLikeSvg>
                </S.TrackPlayLike>
                <S.TrackPlayDisLike className="_btn-icon">
                  <S.TrackPlayDisLikeSvg className="track-play__dislike-svg" alt="dislike">
                    <use xlinkHref="img/icon/sprite.svg#icon-dislike"></use>
                  </S.TrackPlayDisLikeSvg>
                </S.TrackPlayDisLike>
              </S.TrackPlayLikeDis>
            </S.TrackPlay>
          </S.BarPlayer>
          <S.VolumeBlock>
            <S.VolumeContent>
              <S.VolumeImage>
                <S.VolumeSvg alt="volume">
                  <use xlinkHref="img/icon/sprite.svg#icon-volume"></use>
                </S.VolumeSvg>
              </S.VolumeImage>
              <S.VolumeProgress className="_btn">
                <S.VolumeProgressLine
                  className="_btn"
                  type="range"
                  name="range"
                />
              </S.VolumeProgress>
            </S.VolumeContent>
          </S.VolumeBlock>
        </S.BarPlayerBlock>
      </S.BarContent>
    </S.Bar>
  )
}
