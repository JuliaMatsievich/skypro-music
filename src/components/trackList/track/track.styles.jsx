import styled, { keyframes } from 'styled-components'

export const PlayListItem = styled.div`
  width: 100%;
  display: block;
  margin-bottom: 12px;
`
export const PlayListTrack = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
`
export const TrackTiltle = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  width: 447px;
`
export const TrackTiltleImage = styled.div`
  width: 51px;
  height: 51px;
  padding: 16px;
  background: #313131;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  margin-right: 17px;
`
export const TrackTiltleImageSvg = styled.svg`
  width: 18px;
  height: 17px;
  fill: transparent;
  stroke: #4e4e4e;
`
export const TrackTiltleText = styled.div``
export const TrackTiltleLink = styled.a`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #ffffff;
`
export const TrackTiltleSpan = styled.span`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #4e4e4e;
`
export const TrackTiltleAuthor = styled.div`
  width: 321px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: start;
  -ms-flex-pack: start;
  justify-content: flex-start;
`
export const TrackTiltleAuthorLink = styled.a`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #ffffff;
  text-align: left;
`
export const TrackTiltleAlbum = styled.div`
  width: 245px;
`
export const TrackTiltleAlbumLink = styled.a`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #696969;
`
export const TrackTime = styled.div``
export const TrackTimeSvg = styled.svg`
  width: 14px;
  height: 12px;
  margin-right: 17px;
  fill: transparent;
  stroke: #696969;
`
export const TrackTimeText = styled.span`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  text-align: right;
  color: #696969;
`
const blinker = keyframes`
  from { opacity: 1.0; }
  to { opacity: 0.6; }
`

export const SkeletonTitleImage = styled(TrackTiltleImage)`
  background-color: #313131;
  width: 51px;
  height: 51px;
  animation: ${blinker} 1s cubic-bezier(1, 2, 0, 1) infinite;
`
export const SkeletonTitleText = styled(TrackTiltleText)`
  background-color: #313131;
  width: 356px;
  height: 19px;
  animation: ${blinker} 1s cubic-bezier(1, 2, 0, 1) infinite;
`
export const SkeletonTitleAuthor = styled(TrackTiltleAuthor)`
  background-color: #313131;
  width: 271px;
  height: 19px;
  animation: ${blinker} 1s cubic-bezier(1, 2, 0, 1) infinite;
`
export const SkeletonTitleAlbum = styled(TrackTiltleAlbum)`
  background-color: #313131;
  width: 305px;
  height: 19px;
  animation: ${blinker} 1s cubic-bezier(1, 2, 0, 1) infinite;
`

