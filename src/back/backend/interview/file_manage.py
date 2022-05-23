import random

def select(field_id):
    # 인성 0, 기술 1~6
    field_list = ['personality_interview', 'embeded', 'ui-ux', 'database', 'security', 'cloud-service', 'bigdata']
    #question_id = random.randint(1, 5)
    question_id = 1

    if field_id == 0:
        key = '{}/00{}.mp4'.format(field_list[field_id], question_id)
    else:
        key = 'job_interview/{}/00{}.mp4'.format(field_list[field_id], question_id)

    return question_id, key


if __name__=="__main__":
    print(select(0))
    print(select(1))

