var sendJsonResponse = function(res, status, content) {
    res.status(status);
    res.json(content);
    };
    module.exports.locationsCreate = function (req, res) {
        // You can access the request body to create a new course
        const newCourse = new Course({
          name: req.body.name,
          address: req.body.address,
          rating: req.body.rating,
          movies: req.body.movies,
        });
      
        newCourse
          .save()
          .then(course => {
            sendJsonResponse(res, 201, course);
          })
          .catch(err => {
            sendJsonResponse(res, 500, { error: 'An error occurred' });
          });
      };
    module.exports.locationsListByDistance = function (req, res) {
    sendJsonResponse(res, 200, {"status" : "success"});
    };
    var mongoose = require('mongoose');
    var Loc = mongoose.model('Location');
    module.exports.locationsReadOne = async function (req, res) {
    try {
    const location = await
    Loc.findById(req.params.locationid).exec();
    sendJsonResponse(res, 200, location);
    console.log(location)
    } catch (err) {
    // Handle the error
    sendJsonResponse(res, 500, { error: 'An error occurred' });
    }
    };
    module.exports.locationsUpdateOne = function (req, res) {
    sendJsonResponse(res, 200, {"status" : "success"});
    };
    module.exports.locationsDeleteOne = async function (req, res) {
        try {
          const courseId = req.params.locationid;
      
          // Check if the course exists before attempting to delete
          const course = await Loc.findById(courseId);
      
          if (!course) {
            sendJsonResponse(res, 404, { error: 'Course not found' });
            return; // Exit the function if course doesn't exist
          }
          sendJsonResponse(res, 200, {"delete":"sucess"});
      
          // If the course exists, proceed with deletion
          await Loc.findByIdAndRemove(courseId).exec();
          sendJsonResponse(res, 204, null);
        } catch (err) {
          console.error(err);
          sendJsonResponse(res, 500, { error: 'An error occurred' });
        }
      };