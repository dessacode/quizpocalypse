// modules
import arvic from './modules/arvic.js';

// import your .js file here (e.g. import john from './modules/john.js')
// ...
import lourdes from './modules/lourdes.js';
import kathlyn from './modules/kathlyn.js';

const store = Vuex.createStore({
    modules: {
        arvic,

        // include your module here (e.g. john)
        // ...
        lourdes
        kathlyn
    }
});

export default store;
