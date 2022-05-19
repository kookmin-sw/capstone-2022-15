"""
user-feedback-bucket -> bucket 이름
 │
 ├─ user_id_{id}
 │		 ├─ interview_id_{id}  # 면접 연습 진행 한 단위
 │     │        └─ result
 │     │                 face_movement_interview_{question_n}.npy  # 첫번째 질문에 대한 머리 움직임 결과
 │     │                 iris_movement_interview_{question_n}.npy

 │     │                 volume_interview_{question_n}.npy
 │     │                 stt_interview_{question_n}.txt
"""

def select(user_id, interview_id, question_n):
    user = f'user_id_{user_id}/interview_id_{interview_id}/result'

    result_list = [f'{user}/face_movement_interview_{question_n}.npz',
                   f'{user}/iris_movement_interview_{question_n}.npz',
                   f'{user}/volume_interview_{question_n}.npz',
                   f'{user}/stt_interview_{question_n}.txt']

    return result_list


