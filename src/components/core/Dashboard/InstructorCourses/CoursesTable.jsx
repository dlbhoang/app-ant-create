import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { COURSE_STATUS } from "../../../../utils/constants";
import { FaClock } from "react-icons/fa";
import { MdDone, MdEdit, MdDelete } from "react-icons/md";
import { useNavigate } from 'react-router-dom';
import ConfirmationModal from "../../../common/ConfirmationModal";
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';
import { deleteCourse, fetchInstructorCourses } from '../../../../services/operations/courseDetailsAPI';

export default function CoursesTable({ courses, setCourses }) {
  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.auth);
  const [loading, setLoading] = useState(false);
  const [confirmationModal, setConfirmationModal] = useState(null);
  const navigate = useNavigate();

  const handleCourseDelete = async (courseId) => {
    setLoading(true);

    await deleteCourse({ courseId }, token);
    const result = await fetchInstructorCourses(token);
    if (result) {
      setCourses(result);
    }
    setConfirmationModal(null);
    setLoading(false);
  }

  return (
    <div className='text-white'>
      <Table>
        <Thead>
          <Tr className="flex gap-x-10 border-richblack-800 p-8">
            <Th className="sm:w-[40%]">
              Khóa học
            </Th>
            <Th>
              Thời gian
            </Th>
            <Th>
              Giá
            </Th>
            <Th>
              Hành động
            </Th>
          </Tr>
        </Thead>

        <Tbody>
          {
            courses.length === 0 ?
              (
                <Tr>
                  <Td>
                    Không tìm thấy khóa học
                  </Td>
                </Tr>
              )
              :
              courses?.map((course) => (
                <Tr className="flex gap-x-10 w-full border-richblack-800 p-8" key={course?._id}>
                  <Td className="flex sm:w-[40%] gap-x-4">
                    <img src={course?.thumbnail}
                      className='w-[270px] h-[150px] rounded-lg object-cover'
                    />
                    <div className='flex flex-col'>
                      <p>{course?.courseName}</p>
                      <p>{course?.courseDescription}</p>
                      <p>Ngày tạo:</p>
                      {
                        course.status === COURSE_STATUS.DRAFT ? (
                          <p className='text-pink-300'>
                            DỰ THẢO
                          </p>
                        ) : (
                          <p className='text-yellow-300'>ĐÃ CÔNG BỐ</p>
                        )
                      }
                    </div>
                  </Td>
                  <Td>
                    2 giờ 30 phút
                  </Td>
                  <Td>
                    {course?.price}
                  </Td>

                  <Td>
                    <button
                      disabled={loading}
                      onClick={() => navigate(`/dashboard/edit-course/${course._id}`)}
                    >
                      <MdEdit />
                    </button>
                    <button
                      disabled={loading}
                      onClick={() => setConfirmationModal({
                        text1: "Bạn có muốn xóa khóa học này không?",
                        text2: "Tất cả dữ liệu liên quan đến khóa học này sẽ bị xóa",
                        btn1Text: "Xóa",
                        btn2Text: "Hủy",
                        btn1Handler: !loading ? (() => handleCourseDelete(course._id)) : (() => {}),
                        btn2Handler: !loading ? (() => setConfirmationModal(null)) : (() => {}),
                      })}
                    >
                      <MdDelete />
                    </button>
                  </Td>
                </Tr>
              )
            )
          }
        </Tbody>
      </Table>
      {confirmationModal && <ConfirmationModal modalData={confirmationModal} />}
    </div>
  )
}
