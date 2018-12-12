export const setServices = (services) => {
    return {
        type: 'SET_SERVICES',
        services,
    }
};

export const setEmployerServices = (services) => {
    return {
        type: 'SET_EMPLOYER_SERVICES',
        services,
    }
};

export const setFreeLancerJobs = (jobs) => {
    return {
        type: 'SET_FREELANCER_JOBS',
        jobs,
    }
};

export const setFreeLancersBusyTimes =(busyTimes) => {
    return{
        type: "SET_FREELANCER_BUSYTIMES",
        busyTimes,
    }
};

export const setMovies = (movies) => {
  // action - always return only object with data, no functionality can be done here
  return {
    type: 'SET_MOVIES',
    movies,
  };
};

export const setGenres = (genres) => {
    return {
        type: 'SET_GENRES',
        genres,
    }
};

export const setLike = (likes) => {
    return {
        type: 'SET_LIKES',
        likes,
    }
};

export const setLogs = (logs) => {
    return {
        type: 'SET_LOGS',
        logs,
    }
};
