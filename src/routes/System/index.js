/**
 * Created by bang on 11/15/15.
 */

module.exports = {
    path: 'system',
    getComponent(location, cb) {
        require.ensure([], (require) => {
            cb(null, require('./components/System'))
        })
    },

    getChildRoutes(location, cb) {
        require.ensure([], (require) => {
            cb(null, [
                //require('./routes/xx')
            ])
        })
    }
}
