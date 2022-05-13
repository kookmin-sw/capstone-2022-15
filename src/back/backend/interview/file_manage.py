import random

def select(field_id):
    # 인성 0, 기술 1~6
    field_list = ['personality_interview', 'embeded', 'ui-ux', 'database', 'security', 'cloud-service', 'bigdata']
    question_id = random.randint(1, 5)

    if field_id == 0:
        key = '{}/00{}.mp4'.format(field_list[field_id], field_list[question_id])
    else:
        key = 'job_interview/{}/00{}.mp4'.format(field_list[field_id], field_list[question_id])

    return question_id, key