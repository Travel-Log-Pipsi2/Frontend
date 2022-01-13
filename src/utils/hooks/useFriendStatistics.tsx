/* eslint-disable no-console */
import { useEffect, useState, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import AuthAPI from 'services/api';

type FriendViewHookResponse = {
  isFriendView: boolean;
  friendStats: any;
  friendMarkers: any;
};

const useFriendsStatistic = (): FriendViewHookResponse => {
  const [isFriendView, setFriendView] = useState(false);
  const [friendStats, setFriendStats] = useState(null);
  const [friendMarkers, setFriendMarkers] = useState(null);
  const { id } = useParams<{ id: string }>();

  const getFriendStatistic = useCallback(() => {
    AuthAPI.getUserStatsById(id)
      .then(({ data }) => setFriendStats(data.content))
      .catch(() => console.log());
  }, [id]);

  const getFriendMarkers = useCallback(() => {
    AuthAPI.getUserMarkers(id)
      .then(({ data }) => setFriendMarkers(data.content))
      .catch(() => console.log());
  }, [id]);

  useEffect(() => {
    if (id) {
      setFriendView(true);
    } else {
      setFriendView(false);
    }
  }, [id]);

  useEffect(() => {
    if (isFriendView) {
      getFriendStatistic();
      getFriendMarkers();
    }
  }, [getFriendMarkers, getFriendStatistic, isFriendView]);

  return {
    isFriendView,
    friendStats,
    friendMarkers,
  };
};

export default useFriendsStatistic;
